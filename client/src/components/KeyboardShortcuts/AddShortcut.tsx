import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/store";
import Shortcut from "./Shortcut";

interface Props {
	GoToCommandSelection: () => void;
}

const AddShortcut = ({ GoToCommandSelection }: Props) => {
	const KeyMap = useAppSelector((state) => state.ShortcutsReducer.KeyMap);
	return (
		<>
			{Object.entries(KeyMap).map((currentEntry, index) => (
				<Shortcut
					Key={currentEntry[1][0]}
					Command={currentEntry[0]}
					key={index}
				/>
			))}
			{Object.entries(KeyMap).length !== 4 && (
				<Button onClick={GoToCommandSelection}>Add Shortcut</Button>
			)}
		</>
	);
};
const Button = styled.button`
	outline: none;
	border: none;
	color: white;
	background-color: gray;
	border-radius: 6px;
	padding: 0.5em;
	cursor: pointer;
	margin-top: 1em;
`;

export default AddShortcut;
