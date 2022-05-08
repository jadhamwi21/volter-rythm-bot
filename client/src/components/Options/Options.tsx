import React from "react";
import styled from "styled-components";
import OptionsList from "./OptionsList";
import { useOptions } from "../../hooks/useOptions";
import { OptionsType } from "../../typescript/types";
import OptionDisplay from "./OptionDisplay";

const Options = () => {
	const {
		selectedOption,
		SelectCommandsCustomization,
		SelectKeyboardShortcuts,
	} = useOptions(OptionsType.KeyboardShortcuts);
	return (
		<Container>
			<OptionsList
				SelectCommandsCustomization={SelectCommandsCustomization}
				SelectKeyboardShortcuts={SelectKeyboardShortcuts}
				selectedOption={selectedOption}
			/>
			<OptionDisplay SelectedOption={selectedOption} />
		</Container>
	);
};
export const Container = styled.div`
	height: 50vh;
	width: 60vw;
	display: flex;
	flex-direction: row;
`;

export default Options;
