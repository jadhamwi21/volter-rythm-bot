import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { CheckForKeysOnly, Titalize } from "../../helper/utils";
import KeyboardIcon from "@mui/icons-material/Keyboard";

interface Props {
	SetRecord: (recordValue: string) => void;
	Record: string;
	SaveShortcut: () => void;
}

const KeyRecord = ({ SetRecord, Record, SaveShortcut }: Props) => {
	const [field, setField] = useState("");
	useEffect(() => {
		if (CheckForKeysOnly(field)) SetRecord(Titalize(field));
	}, [field]);
	return (
		<>
			<Wrapper>
				<RecordField
					type="text"
					value={Record}
					onKeyDown={(e) => {
						setField(e.key);
					}}
					autoFocus
				/>
				<KeyboardIconContainer>
					<KeyboardIcon />
				</KeyboardIconContainer>
			</Wrapper>
			<SaveLink onClick={SaveShortcut}>Save</SaveLink>
		</>
	);
};

const Wrapper = styled.div`
	height: fit-content;
	width: fit-content;
	position: relative;
`;

const RecordField = styled.input`
	border: none;
	outline: none;
	border-radius: 6px;
	padding: 0.5em 1em;
	caret-color: transparent;
	user-select: none;
	width: 100%;
`;
const KeyboardIconContainer = styled.div`
	height: fit-content;
	width: fit-content;
	position: absolute;
	top: 3px;
	right: 8px;
`;
const SaveLink = styled.div`
	text-decoration: underline;
	cursor: pointer;
	font-size: 13px;
	margin-top: 1em;
`;

export default KeyRecord;
