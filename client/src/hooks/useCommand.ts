import React from "react";
import { processCommand } from "../bot/logic";
import { SetCommand } from "../slices/user";

import { useAppDispatch, useAppSelector } from "../store/store";

export const useCommand = () => {
	const ReduxDispatch = useAppDispatch();
	const fieldValue = useAppSelector(
		(state) => state.UserReducer.CommandFieldValue
	);

	const FieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		ReduxDispatch(
			SetCommand({
				commandValue: e.target.value,
			})
		);
	};
	const SendCommand = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (fieldValue !== "") {
			const FieldValue = fieldValue;
			processCommand(FieldValue);
		}
	};
	return {
		FieldValue: fieldValue,
		FieldHandler,
		SendCommand,
	};
};
