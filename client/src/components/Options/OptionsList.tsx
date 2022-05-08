import React from "react";
import styled from "styled-components";
import { OptionsListProps } from "../../typescript/interfaces";
import { OptionsType } from "../../typescript/types";

const OptionsList = ({
	SelectCommandsCustomization,
	SelectKeyboardShortcuts,
	selectedOption,
}: OptionsListProps) => {
	return (
		<OptionsContainer>
			<OptionItem
				onClick={SelectKeyboardShortcuts}
				selected={selectedOption === OptionsType.KeyboardShortcuts}
			>
				Keyboard Shortcuts
			</OptionItem>
			<OptionItem
				onClick={SelectCommandsCustomization}
				selected={selectedOption === OptionsType.CommandsCustomization}
			>
				Commands Customization
			</OptionItem>
		</OptionsContainer>
	);
};
const OptionsContainer = styled.div`
	height: 100%;
	width: 40%;
	border-right: solid 1px gray;
	padding: 2em;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;
const OptionItem = styled.div<{ selected: boolean }>`
	cursor: pointer;
	margin: 1em 0px;
	width: 100%;
	height: fit-content;
	padding: 0.5em 1em;
	text-align: left;
	border-radius: 6px;
	background-color: ${(props) => (props.selected ? "#0474ea" : "initial")};
	color: ${(props) => (props.selected ? "white" : "initial")};
	&:hover {
		background-color: #0474ea;
	}
	transition: all 0.2s ease;
`;

export default OptionsList;
