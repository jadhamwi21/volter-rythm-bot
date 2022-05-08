import React from "react";
import styled from "styled-components";
import BotLogo from "../assets/bot_logo.jpg";
import NextButton from "../components/Paginator/NextButton";
import Typewriter from "typewriter-effect";
const Welcome = () => {
	return (
		<WelcomeGrid>
			<ElementsWrapper>
				<BotLogoElement src={BotLogo} />
				<BotName>Volter</BotName>
				<BotWelcomeMessage>
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("Hello, I'm here to help you play songs in ease.")
								.start();
						}}
						options={{
							autoStart: true,
							delay: 40,
						}}
					/>
				</BotWelcomeMessage>
				<NextButton />
			</ElementsWrapper>
		</WelcomeGrid>
	);
};
const WelcomeGrid = styled.section`
	display: grid;
	place-items: center;
	height: fit-content;
	width: 100%;
	user-select: none;
`;
const ElementsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: fit-content;
	margin-bottom: 100px;
`;
const BotLogoElement = styled.img`
	height: 200px;
	width: 200px;
`;
const BotName = styled.p`
	color: #304ffe;
	font-size: 30px;
`;
const BotWelcomeMessage = styled.p`
	color: #bbbbbb;
	font-size: 30px;
	text-align: center;
`;

export default Welcome;
