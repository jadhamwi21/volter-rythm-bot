import PQueue from "p-queue";
import { Message, SenderTypes } from "./types";

interface Song {
	youtubeId: String;
	title: String;
}

export interface UserInterface {
	userId: string;
	queue: Song[];
}

export interface SongMetadata {
	title: string;
	duration: string;
	thumbnail: string;
	positionInQueue: number;
}
export interface user_message {
	Sender: SenderTypes.User;
	Content: string;
}
export interface MessageData {
	title?: string;
	duration?: string;
	thumbnail?: string;
	positionInQueue?: number;
}

export interface bot_message {
	Sender: SenderTypes.Bot;
	Content: string;
	dataWithTheMessage?: MessageData;
}

export interface MessageMutationInterface {
	messageKey: number;
	message: Message;
}
