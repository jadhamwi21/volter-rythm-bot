import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	CommandsStateInterface,
	MutateBasePayload,
	MutateCommandKeywordPayload,
} from "../typescript/interfaces";

const initialState: CommandsStateInterface = {
	Pause: "pause",
	Play: "play",
	Resume: "resume",
	Skip: "skip",
	Repeat: "loop",
	Exit: "exit",
	Base: "!",
};

const commandsSlice = createSlice({
	name: "commands",
	initialState,
	reducers: {
		MutateCommandKeyword: (
			state,
			{ payload }: PayloadAction<MutateCommandKeywordPayload>
		) => {
			state[payload.Command] = payload.NewKeyword;
		},
		MutateBase: (state, { payload }: PayloadAction<MutateBasePayload>) => {
			state["Base"] = payload.NewBase;
		},
		RestoreOldCommandsAndBase: (
			state,
			{ payload }: PayloadAction<CommandsStateInterface>
		) => {
			return payload;
		},
	},
});

export const { MutateBase, MutateCommandKeyword, RestoreOldCommandsAndBase } =
	commandsSlice.actions;
export const CommandsReducer = commandsSlice.reducer;
