import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddShortcutThunkPayload } from "../typescript/interfaces";
import { AddShortcutThunkFulfillement, AppState } from "../typescript/types";

export const AddShortcutThunk = createAsyncThunk<
	AddShortcutThunkFulfillement,
	AddShortcutThunkPayload,
	{ state: AppState }
>("shortcut/add", async ({ SelectedShortcutCommand, Key }, { getState }) => {
	const { ShortcutsReducer } = getState();
	const { KeyMap } = ShortcutsReducer;
	const TakenKeys = Object.values(KeyMap);
	for (const currentTakenKey of TakenKeys) {
		if (currentTakenKey[0] === Key[0]) {
			throw new Error("Key Taken");
		}
	}

	return { Key, SelectedShortcutCommand };
});
