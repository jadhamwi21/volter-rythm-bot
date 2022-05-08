import { store } from "../store/store";
import {
	AddShortcutThunkPayload,
	bot_message,
	ExitCommand,
	IncomprehensibleCommand,
	PauseCommand,
	PlayCommand,
	RepeatCommand,
	ResumeCommand,
	SkipCommand,
	user_message,
} from "./interfaces";

export enum Playback {
	PLAY,
	PAUSE,
}

export type Messages = { [messageKey: number]: Message };

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export enum SenderTypes {
	User = "User",
	Bot = "Bot",
}

export type Message = user_message | bot_message;

export enum CommandFlags {
	Play = "!play",
	Pause = "!pause",
	Resume = "!resume",
	Skip = "!skip",
	Repeat = "!loop",
	Incomprehensible = "none",
	Exit = "!exit",
}

export type Command =
	| PlayCommand
	| PauseCommand
	| ExitCommand
	| ResumeCommand
	| SkipCommand
	| IncomprehensibleCommand
	| RepeatCommand;

export enum Behavior {
	Play = "Play",
	Queue = "Queue",
}

export enum MenuChoice {
	Options = "Options",
	Favorites = "Favorites",
	Initial = "Initial",
}
export enum OptionsType {
	KeyboardShortcuts,
	CommandsCustomization,
}
export enum ShortcutStage {
	Initial,
	CommandSelection,
	KeyRecord,
}

export enum ShortcutCommand {
	Pause = "Pause",
	Resume = "Resume",
	Skip = "Skip",
	Repeat = "Repeat",
}

export type AddShortcutThunkFulfillement = AddShortcutThunkPayload;

export type HandlersType = any;

export type CommandsAndBaseKeyType =
	| "Play"
	| "Pause"
	| "Resume"
	| "Repeat"
	| "Skip"
	| "Base";
