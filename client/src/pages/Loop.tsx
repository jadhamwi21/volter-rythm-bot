import React from "react";
import Instruction from "../components/Instruction/Instruction";
import { CommandFlags } from "../typescript/types";

const Loop = () => {
	return (
		<Instruction title="Loop" baseCommand={CommandFlags.Repeat}>
			This command will toggle player loop
		</Instruction>
	);
};

export default Loop;
