import { AddNewMessage } from "../slices/messages";
import { SetCommand } from "../slices/user";
import { store } from "../store/store";
import {
	ExitThunk,
	PauseThunk,
	PlayThunk,
	RepeatThunk,
	ResumeThunk,
	SkipThunk,
} from "../thunks/botThunks";
import { CommandFlags, SenderTypes } from "../typescript/types";
import { ParseCommand } from "./parser";

const Dispatch = store.dispatch;

export const processCommand = (Command: string) => {
	Dispatch(
		AddNewMessage({ message: { Sender: SenderTypes.User, Content: Command } })
	);
	Dispatch(SetCommand({ commandValue: "" }));
	const ParsedCommand = ParseCommand(Command);
	const CommandType = ParsedCommand.CommandType;
	switch (CommandType) {
		case CommandFlags.Play:
			return Dispatch(PlayThunk(ParsedCommand));
		case CommandFlags.Pause:
			return Dispatch(PauseThunk());
		case CommandFlags.Resume:
			return Dispatch(ResumeThunk());
		case CommandFlags.Repeat:
			return Dispatch(RepeatThunk());
		case CommandFlags.Skip:
			return Dispatch(SkipThunk({ autoSkip: false }));
		case CommandFlags.Exit:
			return Dispatch(ExitThunk());
		default:
			Dispatch(
				AddNewMessage({
					message: {
						Sender: SenderTypes.Bot,
						Content: "Sorry, didn't catch that :(",
					},
				})
			);
	}
};
