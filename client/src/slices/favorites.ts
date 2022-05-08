import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	Trigger: 0,
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		TriggerStorageHandler: (state) => {
			state.Trigger = state.Trigger + 1;
		},
	},
});

export const { TriggerStorageHandler } = favoritesSlice.actions;
export const FavoritesReducer = favoritesSlice.reducer;
