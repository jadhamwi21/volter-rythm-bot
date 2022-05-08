import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/store";
import { ShortcutCommand } from "../../typescript/types";

interface Props {
	CommandSelector: (command: ShortcutCommand) => void;
	GoToKeyRecord: () => void;
}

const CommandSelection = ({ CommandSelector, GoToKeyRecord }: Props) => {
	const AvailableCommands = useAppSelector(
		(state) => state.ShortcutsReducer.AvailableCommands
	);
	return (
		<Wrapper>
			{AvailableCommands.map((command, index) => (
				<CommandElement
					onClick={() => {
						CommandSelector(command);
						GoToKeyRecord();
					}}
					key={index}
				>
					{command}
				</CommandElement>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	padding: 0px;
`;
const CommandElement = styled.li`
	color: rgba(0, 0, 0, 0.8);
	&:hover {
		cursor: pointer;
		color: black;
	}
`;

export default CommandSelection;
