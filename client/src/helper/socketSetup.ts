import { io } from "socket.io-client";
import { Endpoint } from "../constants/constants";
import { AddNewMessage, MutateMessage } from "../slices/messages";
import { SetSource } from "../slices/player";
import { SetUserID } from "../slices/user";
import { store } from "../store/store";
import { MessageMutationInterface } from "../typescript/interfaces";
import { Message } from "../typescript/types";

export const socketSetup = () => {
	const socket = io(`${Endpoint}`, { autoConnect: false });
	const Dispatch = store.dispatch;
	socket.on("connect", () => {
		Dispatch(SetUserID({ userId: socket.id }));
	});
	socket.on(
		"mutate-message",
		(MessageMutationObject: MessageMutationInterface) => {
			store.dispatch(
				MutateMessage({
					messageKey: MessageMutationObject.messageKey,
					message: MessageMutationObject.message,
				})
			);
		}
	);
	socket.on("add-message", (message: Message) => {
		store.dispatch(AddNewMessage({ message }));
	});

	socket.on("update-source", (source: string) => {
		store.dispatch(
			SetSource({
				source: `${Endpoint}/data/${
					store.getState().UserReducer.UserID
				}/${source}.mp3`,
			})
		);
	});
	return socket;
};
