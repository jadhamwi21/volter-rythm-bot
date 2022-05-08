import React from "react";
import styled from "styled-components";
import AddShortcut from "./AddShortcut";
import { useShortcuts } from "../../hooks/useShortcuts";
import { ShortcutCommand, ShortcutStage } from "../../typescript/types";
import CommandSelection from "./CommandSelection";
import KeyRecord from "./KeyRecord";
import { AnimatePresence, motion } from "framer-motion";

const KeyboardShortcuts = () => {
	const {
		stage,
		setStage,
		setSelectedCommand,
		AddShortcutHandler,
		record,
		setRecord,
	} = useShortcuts();
	return (
		<Container>
			<AnimatePresence exitBeforeEnter>
				<Wrapper
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					key={stage}
					transition={{ duration: 0.1 }}
				>
					{stage === ShortcutStage.Initial && (
						<AddShortcut
							GoToCommandSelection={() =>
								setStage(ShortcutStage.CommandSelection)
							}
						/>
					)}
					{stage === ShortcutStage.CommandSelection && (
						<CommandSelection
							CommandSelector={(command: ShortcutCommand) =>
								setSelectedCommand(command)
							}
							GoToKeyRecord={() => setStage(ShortcutStage.KeyRecord)}
						/>
					)}
					{stage === ShortcutStage.KeyRecord && (
						<KeyRecord
							SetRecord={setRecord}
							Record={record}
							SaveShortcut={() => {
								if (record && record !== "This Key Is Taken") {
									AddShortcutHandler();
								}
							}}
						/>
					)}
				</Wrapper>
			</AnimatePresence>
		</Container>
	);
};
const Container = styled.div`
	display: grid;
	place-items: center;
	height: 100%;
`;

const Wrapper = styled(motion.div)`
	height: fit-content;
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`;

export default KeyboardShortcuts;
