import React from "react";
import styled from "styled-components";
import botLogo from "../../assets/bot_error.jpg";

const BotNotSupported = () => {
	return (
		<Container>
			<Wrapper>
				<BotLogo src={botLogo} />
				<ErrorMessage>
					This App Is Not Supported For Mobile Devices
				</ErrorMessage>
			</Wrapper>
		</Container>
	);
};
const Container = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	width: 100vw;
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const BotLogo = styled.img`
	height: 50vh;
	width: auto;
	display: block;
`;
const ErrorMessage = styled.h2`
	color: #489cf7;
	margin: 0px;
	padding: 0px;
	text-align: center;
`;

export default BotNotSupported;
