import React from "react";
import styled from "styled-components";
import BotLogoTransparent from "../../assets/bot_logo_transparent.png";
import MainMenu from "../MainMenu/MainMenu";
import VolumeSlider from "../SongPlayer/VolumeSlider";
const BotHeader = () => {
	return (
		<React.Fragment>
			<Header>
				<MainMenu />
				<Wrapper>
					<BotLogo src={BotLogoTransparent} />
					<BotName>VOLTER</BotName>
				</Wrapper>
				<VolumeSlider />
			</Header>
		</React.Fragment>
	);
};
const Header = styled.header`
	height: 80px;
	width: 100%;
	background-color: #e7e7e7;
	color: #0474ea;
	display: grid;
	place-items: center;
	font-size: 40px;
	user-select: none;
	position: relative;
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: fit-content;
`;
const BotName = styled.h5`
	padding: 0px;
	margin: 0px;
	font-weight: 400;
`;
const BotLogo = styled.img`
	height: 75px;
	width: 75px;
`;

export default BotHeader;
