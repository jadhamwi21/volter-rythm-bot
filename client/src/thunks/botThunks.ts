import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { socket } from "../App";
import { Endpoint } from "../constants/constants";
import { AddNewMessage } from "../slices/messages";
import { SetLoop, SetPlayback, SetSource } from "../slices/player";
import { store } from "../store/store";
import {
	PlayCommand,
	PlayPostRequestDataModel,
} from "../typescript/interfaces";
import { AppState, Playback, SenderTypes } from "../typescript/types";

export const PlayThunk = createAsyncThunk(
	"bot/play",
	async (commandObject: PlayCommand, { dispatch }) => {
		const Key = store.getState().MessagesReducer.MessageKey;
		await axios
			.post<PlayPostRequestDataModel>(`${Endpoint}/bot/play`, {
				userSongQuery: commandObject.Query,
				userId: store.getState().UserReducer.UserID,
				messageKey: Key,
			})
			.catch((e: any) => {
				console.log(e);
			});
	}
);

export const PauseThunk = createAsyncThunk<void, void, { state: AppState }>(
	"bot/pause",
	(_, { dispatch, getState }) => {
		const playback = getState().PlayerReducer.Playback;
		if (playback !== Playback.PAUSE) {
			dispatch(
				AddNewMessage({
					message: {
						Sender: SenderTypes.Bot,
						Content: "Paused!",
					},
				})
			);
			dispatch(
				SetPlayback({
					playback: Playback.PAUSE,
				})
			);
		}
	}
);
export const ResumeThunk = createAsyncThunk<void, void, { state: AppState }>(
	"bot/resume",
	(_, { dispatch, getState }) => {
		const playback = getState().PlayerReducer.Playback;
		if (playback !== Playback.PLAY) {
			dispatch(
				AddNewMessage({
					message: {
						Sender: SenderTypes.Bot,
						Content: "Resumed!",
					},
				})
			);
			dispatch(
				SetPlayback({
					playback: Playback.PLAY,
				})
			);
		}
	}
);

export const RepeatThunk = createAsyncThunk<void, void, { state: AppState }>(
	"bot/repeat",
	(_, { dispatch, getState }) => {
		dispatch(
			AddNewMessage({
				message: {
					Sender: SenderTypes.Bot,
					Content: `Repeat Turned ${
						getState().PlayerReducer.Loop ? "off" : "on"
					}`,
				},
			})
		);
		dispatch(
			SetLoop({
				loop: !getState().PlayerReducer.Loop,
			})
		);
	}
);

export const SkipThunk = createAsyncThunk<
	void,
	{ autoSkip: boolean },
	{ state: AppState }
>("bot/skip", ({ autoSkip }, { dispatch, getState }) => {
	dispatch(SetSource({ source: "" }));
	axios
		.put(`${Endpoint}/bot/skip`, {
			userId: getState().UserReducer.UserID,
			autoSkip,
		})
		.catch((e) => {
			console.log(e);
		});
});

export const ExitThunk = createAsyncThunk("bot/exit", (_, { dispatch }) => {
	socket.emit("terminate");
	dispatch(
		AddNewMessage({
			message: {
				Sender: SenderTypes.Bot,
				Content: "My Pleasure To Serve You Sir!!",
			},
		})
	);
	dispatch(SetSource({ source: "" }));
});
