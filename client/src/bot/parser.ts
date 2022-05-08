import { FormCommand } from "../helper/utils";
import { store } from "../store/store";
import { Command, CommandFlags } from "../typescript/types";

const ParseSimpleCommand = (Command: string): Command => {
	const { Base, Pause, Resume, Skip, Repeat, Exit } =
		store.getState().CommandsReducer;
	switch (Command) {
		case FormCommand(Base, Pause):
			return { CommandType: CommandFlags.Pause };
		case FormCommand(Base, Resume):
			return { CommandType: CommandFlags.Resume };
		case FormCommand(Base, Skip):
			return { CommandType: CommandFlags.Skip };
		case FormCommand(Base, Repeat):
			return { CommandType: CommandFlags.Repeat };
		case FormCommand(Base, Exit):
			return { CommandType: CommandFlags.Exit };
		default:
			return { CommandType: CommandFlags.Incomprehensible };
	}
};

const ParseComplexCommand = (Command: string): Command => {
	const Pieces = Command.split(" ");
	const Keyword = Pieces[0];
	const { Base, Play } = store.getState().CommandsReducer;
	switch (Keyword) {
		case FormCommand(Base, Play):
			return {
				CommandType: CommandFlags.Play,
				Query: Pieces.slice(1).join(" "),
			};
		default:
			return { CommandType: CommandFlags.Incomprehensible };
	}
};

export const ParseCommand = (Command: string): Command => {
	const Pieces = Command.split(" ");
	if (Pieces.length === 1) {
		return ParseSimpleCommand(Command);
	} else {
		return ParseComplexCommand(Command);
	}
};
