import { bot_message, user_message } from "./interfaces";

export enum Behavior {
	Play = "Play",
	Queue = "Queue",
}

export enum SenderTypes {
	User = "User",
	Bot = "Bot",
}

export type Message = user_message | bot_message;
