import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayThunk } from "../thunks/botThunks";
import {
	MessagesState,
	MutateMessagePayload,
	StoreMessagePayload,
} from "../typescript/interfaces";
import { SenderTypes } from "../typescript/types";

const initialState: MessagesState = {
	MessageKey: 1,
	ChatMessages: {
		0: {
			Sender: SenderTypes.Bot,
			Content: "Hello there! My name is Volter, How can i help you?",
		},
	},
};

const messagesSlice = createSlice({
	name: "MessagesSlice",
	initialState,
	reducers: {
		AddNewMessage: (state, { payload }: PayloadAction<StoreMessagePayload>) => {
			state.ChatMessages[state.MessageKey] = payload.message;
			state.MessageKey = state.MessageKey + 1;
		},
		MutateMessage: (
			state,
			{ payload }: PayloadAction<MutateMessagePayload>
		) => {
			state.ChatMessages[payload.messageKey] = payload.message;
		},
	},
});
export const { AddNewMessage, MutateMessage } = messagesSlice.actions;
export const MessagesReducer = messagesSlice.reducer;
