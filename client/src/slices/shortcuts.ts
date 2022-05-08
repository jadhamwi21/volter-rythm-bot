import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddShortcutThunk } from "../thunks/shortcutsThunks";
import { ShortcutsStateInterface } from "../typescript/interfaces";
import { ShortcutCommand } from "../typescript/types";

const initialState: ShortcutsStateInterface = {
	AvailableCommands: [
		ShortcutCommand.Pause,
		ShortcutCommand.Resume,
		ShortcutCommand.Skip,
		ShortcutCommand.Repeat,
	],
	KeyMap: {},
};

const shortcutsSlice = createSlice({
	name: "shortcuts",
	initialState,
	reducers: {
		RemoveShortcut: (state, { payload }: PayloadAction<ShortcutCommand>) => {
			state.AvailableCommands.push(payload);
			delete state.KeyMap[payload];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(AddShortcutThunk.fulfilled, (state, { payload }) => {
			state.AvailableCommands.splice(
				state.AvailableCommands.indexOf(payload.SelectedShortcutCommand),
				1
			);
			state.KeyMap[payload.SelectedShortcutCommand] = [
				payload.Key,
				payload.Key.toLowerCase(),
			];
		});
	},
});

export const { RemoveShortcut } = shortcutsSlice.actions;

export const ShortcutsReducer = shortcutsSlice.reducer;
