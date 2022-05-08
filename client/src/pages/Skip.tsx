import React from "react";
import Instruction from "../components/Instruction/Instruction";
import { CommandFlags } from "../typescript/types";

interface Props {}

const Skip = (props: Props) => {
	return (
		<Instruction title="Skip" baseCommand={CommandFlags.Skip}>
			This Command will Skip currently playing Song
		</Instruction>
	);
};

export default Skip;
