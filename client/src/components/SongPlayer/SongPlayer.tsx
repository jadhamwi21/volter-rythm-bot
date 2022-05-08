import React from "react";
import styled from "styled-components";
import usePlayerController from "../../hooks/usePlayerController";
import ReactPlayer from "react-player";
import { Playback as PlaybackEnum } from "../../typescript/types";

const SongPlayer = () => {
	const { Source, Playback, Loop, Skip, Volume } = usePlayerController();
	return (
		<Wrapper>
			<ReactPlayer
				url={Source}
				loop={Loop}
				playing={Playback === PlaybackEnum.PLAY ? true : false}
				onEnded={Skip}
				volume={Volume}
			/>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: none;
`;

export default SongPlayer;
