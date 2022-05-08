import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import {
	CheckForDuplicateKeywords,
	CheckForRestoreNeed,
} from "../../helper/utils";
import { RestoreOldCommandsAndBase } from "../../slices/commands";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { CommandsAndBaseKeyType } from "../../typescript/types";
import TableEntry from "./TableEntry";

const CommandsCustomization = () => {
	const CommandsKeywordsAndBase = useAppSelector(
		(state) => state.CommandsReducer
	);
	const Dispatch = useAppDispatch();
	const OldCommandsAndBase = useMemo(() => {
		return CommandsKeywordsAndBase;
	}, []);
	const ShouldRestoreOld = useRef(false);
	useEffect(() => {
		if (CheckForRestoreNeed(Object.entries(CommandsKeywordsAndBase))) {
			ShouldRestoreOld.current = true;
		} else {
			ShouldRestoreOld.current = false;
		}
	}, [CommandsKeywordsAndBase]);
	useEffect(() => {
		return () => {
			if (ShouldRestoreOld.current) {
				Dispatch(RestoreOldCommandsAndBase(OldCommandsAndBase));
			}
		};
	}, []);
	return (
		<Container>
			<Table>
				{Object.entries(CommandsKeywordsAndBase).map((entry, index) => (
					<TableEntry
						Key={entry[0] as CommandsAndBaseKeyType}
						Value={entry[1]}
						key={index}
					/>
				))}
			</Table>
		</Container>
	);
};
const Container = styled.div`
	display: grid;
	place-items: center;
	height: 90%;
`;

const Table = styled.table`
	width: 70%;
	border-collapse: seperate;
	border-spacing: 1em;
`;

export default CommandsCustomization;
