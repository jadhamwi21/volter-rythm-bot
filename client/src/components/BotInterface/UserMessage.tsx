import React from "react";
import styled from "styled-components";
import { UserMessageProps } from "../../typescript/interfaces";

const UserMessage = ({ message }: UserMessageProps) => {
	return (
		<MessageWrapper>
			<MessageBox>{message.Content}</MessageBox>
		</MessageWrapper>
	);
};
const MessageWrapper = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	margin: 1em 0px;
`;
const MessageBox = styled.div`
	background-color: #e7e7e7;
	height: fit-content;
	width: auto;
	min-width: 250px;
	max-width: 350px;
	color: #0474ea;
	text-align: right;
	border-radius: 4px;
	padding: 0.75em;
	text-align: left;
`;

export default UserMessage;
