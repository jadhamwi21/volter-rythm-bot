import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PauseThunk, RepeatThunk, ResumeThunk } from "../thunks/botThunks";
import {
	PlayerState,
	SetLoopPayload,
	SetPlaybackPayload,
	SetSourcePayload,
	SetVolumePayload,
} from "../typescript/interfaces";
import { Playback } from "../typescript/types";

const initialState: PlayerState = {
	Playback: Playback.PLAY,
	Loop: false,
	Source: "",
	Volume: 0.5,
};

const playerSlice = createSlice({
	name: "PlayerSlice",
	initialState,
	reducers: {
		SetPlayback: (state, { payload }: PayloadAction<SetPlaybackPayload>) => {
			state.Playback = payload.playback;
		},
		SetLoop: (state, { payload }: PayloadAction<SetLoopPayload>) => {
			state.Loop = payload.loop;
		},
		SetSource: (state, { payload }: PayloadAction<SetSourcePayload>) => {
			state.Source = payload.source;
		},
		SetVolume: (state, { payload }: PayloadAction<SetVolumePayload>) => {
			state.Volume = payload.volume;
		},
	},
});

export const { SetLoop, SetPlayback, SetSource, SetVolume } =
	playerSlice.actions;

export const PlayerReducer = playerSlice.reducer;
