import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	SetCommandPayload,
	SetUserIdPayload,
	UserState,
} from "../typescript/interfaces";

const initialState: UserState = {
	CommandFieldValue: "",
	UserID: "",
};

const userSlice = createSlice({
	name: "UserSlice",
	initialState,
	reducers: {
		SetCommand: (state, { payload }: PayloadAction<SetCommandPayload>) => {
			state.CommandFieldValue = payload.commandValue;
		},
		SetUserID: (state, { payload }: PayloadAction<SetUserIdPayload>) => {
			state.UserID = payload.userId;
		},
	},
});

export const { SetCommand, SetUserID } = userSlice.actions;
export const UserReducer = userSlice.reducer;
