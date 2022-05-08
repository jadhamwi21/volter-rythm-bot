import React from "react";
import Instruction from "../components/Instruction/Instruction";
import { CommandFlags } from "../typescript/types";

const Pause = () => {
	return (
		<Instruction title="Pause" baseCommand={CommandFlags.Pause}>
			This Command will Pause currently playing Song.
		</Instruction>
	);
};

export default Pause;
