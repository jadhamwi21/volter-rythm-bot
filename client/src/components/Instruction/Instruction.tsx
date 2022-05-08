import React from "react";
import styled from "styled-components";
import { CommandFlags } from "../../typescript/types";

interface Props {
	title: string;
	baseCommand?: CommandFlags;
	children: string | React.ReactNode;
	template?: string;
}

const Instruction = ({ title, baseCommand, children, template }: Props) => {
	return (
		<InstructionContainer>
			<InstructionWrapper>
				<InstructionHeader>{title}</InstructionHeader>
				<BodyWrapper>
					{baseCommand && (
						<BaseCommand>Command :{"  " + baseCommand}</BaseCommand>
					)}
					<Explaination>{children}</Explaination>
					{template && (
						<React.Fragment>
							<TemplateHeader>Template :</TemplateHeader>
							<TemplateBody>{template}</TemplateBody>
						</React.Fragment>
					)}
				</BodyWrapper>
			</InstructionWrapper>
		</InstructionContainer>
	);
};
const InstructionContainer = styled.div`
	user-select: none;
	display: grid;
	place-items: center;
	height: 100%;
	width: 100%;
`;
const InstructionWrapper = styled.div``;
const InstructionHeader = styled.header`
	color: #0474ea;
	font-size: 30px;
`;
const BodyWrapper = styled.div`
	margin: 1em;
	font-size: 20px;
`;
const BaseCommand = styled.p`
	color: black;
	white-space: pre-wrap;
`;
const Explaination = styled.p`
	color: #0474ea;
	margin-top: 0.75em;
`;
const TemplateHeader = styled.div`
	color: black;
`;
const TemplateBody = styled.p`
	color: #85888b;
	text-align: center;
`;
export default Instruction;
