import React from "react";
import styled from "styled-components";
import { MutateBase, MutateCommandKeyword } from "../../slices/commands";
import { useAppDispatch } from "../../store/store";
import { CommandsAndBaseKeyType } from "../../typescript/types";

interface Props {
	Key: CommandsAndBaseKeyType;
	Value: string;
}

const TableEntry = ({ Key, Value }: Props) => {
	const Dispatch = useAppDispatch();
	return (
		<Row>
			<KeyCell>{Key}</KeyCell>
			<ValueCell>
				<ValueField
					type="text"
					value={Value}
					onChange={(e) => {
						if (Key !== "Base") {
							Dispatch(
								MutateCommandKeyword({
									Command: Key,
									NewKeyword: e.target.value,
								})
							);
						} else {
							Dispatch(MutateBase({ NewBase: e.target.value }));
						}
					}}
				/>
			</ValueCell>
		</Row>
	);
};
const Row = styled.tr``;

const KeyCell = styled.td`
	font-weight: 500;
	color: #0474ea;
`;
const ValueCell = styled.td`
	display: grid;
	place-items: center;
`;
const ValueField = styled.input`
	border: none;
	border-radius: 6px;
	outline: none;
	padding: 0.5em 1em;
	caret-color: #0474ea;
`;

export default TableEntry;
