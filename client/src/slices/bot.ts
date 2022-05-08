import { createSlice } from "@reduxjs/toolkit";
import {
	PauseThunk,
	PlayThunk,
	RepeatThunk,
	ResumeThunk,
	SkipThunk,
} from "../thunks/botThunks";

const botSlice = createSlice({
	name: "BotSlice",
	initialState: null,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(PlayThunk.fulfilled, () => {});
		builder.addCase(PauseThunk.fulfilled, () => {});
		builder.addCase(ResumeThunk.fulfilled, () => {});
		builder.addCase(RepeatThunk.fulfilled, () => {});
		builder.addCase(SkipThunk.fulfilled, () => {});
	},
});
export const BotReducer = botSlice.reducer;
