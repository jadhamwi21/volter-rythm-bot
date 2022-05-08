import React from "react";
import styled from "styled-components";
import CommandField from "./CommandField";
import Messages from "./Messages";

const BotChat = () => {
	return (
		<Container>
			<Messages />
			<CommandField />
		</Container>
	);
};
const Container = styled.main`
	height: calc(100vh - 80px);
	width: 100%;
	background-color: white;
`;

export default BotChat;
