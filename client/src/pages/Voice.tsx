import React from "react";
import styled from "styled-components";
import Instruction from "../components/Instruction/Instruction";

interface Props {}

const Voice = (props: Props) => {
	return (
		<Instruction title="Voice">
			<BlackText>
				You can use your voice for all the previous commands: play - pause -
				resume - skip - repeat.
				<br /> preceded with Hey!
			</BlackText>
		</Instruction>
	);
};
const BlackText = styled.div`
	color: #85888b;
`;

export default Voice;
