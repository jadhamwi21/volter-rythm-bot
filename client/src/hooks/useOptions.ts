import { useState } from "react";
import { OptionsType } from "../typescript/types";

export const useOptions = (option: OptionsType) => {
	const [selectedOption, setSelectedOption] = useState(option);
	const SelectKeyboardShortcuts = () =>
		setSelectedOption(OptionsType.KeyboardShortcuts);
	const SelectCommandsCustomization = () =>
		setSelectedOption(OptionsType.CommandsCustomization);
	return {
		selectedOption,
		SelectCommandsCustomization,
		SelectKeyboardShortcuts,
	};
};
