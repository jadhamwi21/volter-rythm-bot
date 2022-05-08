import React from "react";
import Instruction from "../components/Instruction/Instruction";
import { CommandFlags } from "../typescript/types";

const Resume = () => {
	return (
		<Instruction title="Resume" baseCommand={CommandFlags.Resume}>
			This Command will Resume currently playing Song
		</Instruction>
	);
};

export default Resume;
