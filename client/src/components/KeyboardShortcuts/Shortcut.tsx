import React from "react";
import styled from "styled-components";
import { RemoveShortcut } from "../../slices/shortcuts";
import { useAppDispatch } from "../../store/store";
import { ShortcutCommand } from "../../typescript/types";

interface Props {
	Command: string;
	Key: string;
}

const Shortcut = ({ Command, Key }: Props) => {
	const Dispatch = useAppDispatch();
	return (
		<Wrapper>
			<CommandElement>{Command}</CommandElement>
			<KeyElement>{Key}</KeyElement>
			<RemoveElement
				onClick={() => Dispatch(RemoveShortcut(Command as ShortcutCommand))}
			>
				Remove
			</RemoveElement>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	height: fit-content;
	width: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background-color: #0474ea;
	padding: 0.5em 1em;
	border-radius: 6px;
	color: white;
	margin: 0.5em 0px;
`;
const CommandElement = styled.h4`
	margin: 0px;
	padding: 0px;
	width: 100px;
`;
const KeyElement = styled.p`
	padding: 0px;
	margin: 0px;
	width: 50px;
`;
const RemoveElement = styled.div`
	cursor: pointer;
	text-decoration: underline;
`;

export default Shortcut;
