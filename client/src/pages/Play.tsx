import React from "react";
import Instruction from "../components/Instruction/Instruction";
import { CommandFlags } from "../typescript/types";

interface Props {}

const Play = (props: Props) => {
	return (
		<Instruction
			title="Play / Queue"
			baseCommand={CommandFlags.Play}
			template="!play [songname] - [songartist]"
		>
			This Command will Play or Queue the song.
		</Instruction>
	);
};

export default Play;
