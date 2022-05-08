import { useEffect, useState } from "react";
import { SetLoop, SetPlayback } from "../slices/player";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
	PauseThunk,
	RepeatThunk,
	ResumeThunk,
	SkipThunk,
} from "../thunks/botThunks";
import { HandlersType, Playback, ShortcutCommand } from "../typescript/types";

export const useHandlers = () => {
	const [handlers, setHandlers] = useState<HandlersType>({});
	const Dispatch = useAppDispatch();
	const KeyMaps = useAppSelector((state) => state.ShortcutsReducer.KeyMap);
	useEffect(() => {
		const newHandlers: HandlersType = {};
		const Commands = Object.keys(KeyMaps) as ShortcutCommand[];
		Commands.forEach((Command) => {
			if (Command === ShortcutCommand.Resume) {
				newHandlers[Command] = () => {
					Dispatch(ResumeThunk());
				};
			}
			if (Command === ShortcutCommand.Pause) {
				newHandlers[Command] = () => {
					Dispatch(PauseThunk());
				};
			}
			if (Command === ShortcutCommand.Repeat) {
				newHandlers[Command] = () => {
					Dispatch(RepeatThunk());
				};
			}
			if (Command === ShortcutCommand.Skip) {
				newHandlers[Command] = () => {
					Dispatch(SkipThunk({ autoSkip: false }));
				};
			}
		});
		setHandlers(newHandlers);
	}, [KeyMaps]);
	return { handlers, KeyMaps };
};
