import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { OptionDisplayProps } from "../../typescript/interfaces";
import { OptionsType } from "../../typescript/types";
import CommandsCustomization from "../CommandsCustomization/CommandsCustomization";
import KeyboardShortcuts from "../KeyboardShortcuts/KeyboardShortcuts";

const OptionDisplay = ({ SelectedOption }: OptionDisplayProps) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<Container
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				key={SelectedOption}
				transition={{ duration: 0.1 }}
			>
				{SelectedOption === OptionsType.KeyboardShortcuts && (
					<KeyboardShortcuts />
				)}
				{SelectedOption === OptionsType.CommandsCustomization && (
					<CommandsCustomization />
				)}
			</Container>
		</AnimatePresence>
	);
};
const Container = styled(motion.div)`
	padding: 0.5em 1em;
	width: 60%;
`;

export default OptionDisplay;
