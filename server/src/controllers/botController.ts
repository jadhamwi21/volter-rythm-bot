import { Request, Response } from "express";
import { SongBuilder } from "../builder/songBuilder";
import {
	AddNewMessageEvent,
	GetResponseBehavior,
	SendMessageMutationEvent,
} from "../helper/utils";
import { GetSongMetadata } from "../helper/YoutubeMetadataFetcher";
import { GetFirstVideoId } from "../helper/YoutubeSearcher";
import { User } from "../models/userModel";
import { PQueues } from "../services/requestPriorityService";
import { GetAudioStream } from "../services/streamService";
import { SongMetadata } from "../typescript/interfaces";
import { Behavior, SenderTypes } from "../typescript/types";

export const play = async (req: Request, res: Response) => {
	const { userSongQuery, userId, messageKey } = req.body;

	const RequestsQueue = PQueues.get(userId);
	const Hold: boolean = RequestsQueue.pending !== 0;
	if (Hold) {
		AddNewMessageEvent(userId, {
			Sender: SenderTypes.Bot,
			Content: "Waiting...",
		});
	}
	RequestsQueue.add(async () => {
		try {
			const user = await User.findOne({ userId });
			const ResponseBehavior: Behavior = GetResponseBehavior(user.queue);
			if (Hold) {
				SendMessageMutationEvent(userId, {
					messageKey,
					message: {
						Sender: SenderTypes.Bot,
						Content: "Looking For It...",
					},
				});
			} else {
				AddNewMessageEvent(userId, {
					Sender: SenderTypes.Bot,
					Content: "Looking For It...",
				});
			}
			const VideoId = await GetFirstVideoId(userSongQuery);
			SendMessageMutationEvent(userId, {
				messageKey,
				message: {
					Sender: SenderTypes.Bot,
					Content: "Fetching Song Metadata...",
				},
			});
			const { duration, title, thumbnail } = await GetSongMetadata(VideoId);
			SendMessageMutationEvent(userId, {
				messageKey,
				message: {
					Sender: SenderTypes.Bot,
					Content: "Building Song...",
				},
			});
			const readableStream = GetAudioStream(VideoId);
			const BuiltSong: SongMetadata = await new SongBuilder(userId)
				.addTitle(title)
				.addDuration(duration)
				.addThumbnail(thumbnail)
				.addPositionInQueue(user.queue.length + 1)
				.addReadStream(readableStream)
				.build();
			if (ResponseBehavior === Behavior.Play) {
				SendMessageMutationEvent(userId, {
					messageKey,
					message: {
						Sender: SenderTypes.Bot,
						Content: `Playing : '${BuiltSong.title}'`,
						dataWithTheMessage: BuiltSong,
					},
				});
			} else {
				SendMessageMutationEvent(userId, {
					messageKey,
					message: {
						Sender: SenderTypes.Bot,
						Content: `Queued : '${BuiltSong.title}'`,
						dataWithTheMessage: BuiltSong,
					},
				});
			}
			user.queue.push({ youtubeId: VideoId, title });
			await user.save();
			return res.status(200).end();
		} catch (e) {
			SendMessageMutationEvent(userId, {
				messageKey,
				message: {
					Sender: SenderTypes.Bot,
					Content: e.message,
				},
			});
			return res.status(500).end();
		}
	});
};

export const skip = async (req: Request, res: Response) => {
	const { userId, autoSkip } = req.body;
	const user = await User.findOne({ userId });
	if (user.queue.length >= 1) {
		const oldSong = user.queue.shift();
		if (!autoSkip) {
			AddNewMessageEvent(userId, {
				Sender: SenderTypes.Bot,
				Content: `Skipped : ${oldSong.title}`,
			});
		}
		await user.save();
		return res.status(200).end();
	} else {
		AddNewMessageEvent(userId, {
			Sender: SenderTypes.Bot,
			Content: `Nothing To Skip!`,
		});
		return res.status(404).end();
	}
};
