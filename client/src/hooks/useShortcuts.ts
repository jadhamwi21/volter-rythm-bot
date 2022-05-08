import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";
import { useAppDispatch } from "../store/store";
import { AddShortcutThunk } from "../thunks/shortcutsThunks";
import { ShortcutCommand, ShortcutStage } from "../typescript/types";

export const useShortcuts = () => {
	const [stage, setStage] = useState<ShortcutStage>(ShortcutStage.Initial);
	const [selectedCommand, setSelectedCommand] = useState<ShortcutCommand>(
		ShortcutCommand.Pause
	);
	const [record, setRecord] = useState("");
	const Dispatch = useAppDispatch();
	const AddShortcutHandler = async () => {
		Dispatch(
			AddShortcutThunk({
				SelectedShortcutCommand: selectedCommand,
				Key: record,
			})
		)
			.then(unwrapResult)
			.then(() => {
				setRecord("");
				setStage(ShortcutStage.Initial);
			})
			.catch((e) => {
				setRecord("This Key Is Taken");
			});
	};

	return {
		stage,
		setStage,
		setSelectedCommand,
		AddShortcutHandler,
		setRecord,
		record,
	};
};
