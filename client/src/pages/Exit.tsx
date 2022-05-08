import React from "react";
import Instruction from "../components/Instruction/Instruction";
import { CommandFlags } from "../typescript/types";

interface Props {}

const Exit = (props: Props) => {
	return (
		<Instruction title="Exit" baseCommand={CommandFlags.Exit}>
			Use This Command To Exit The Application.
		</Instruction>
	);
};

export default Exit;
