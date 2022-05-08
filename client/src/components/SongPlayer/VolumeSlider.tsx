import React from "react";
import styled from "styled-components";
import { SetVolume } from "../../slices/player";
import { useAppDispatch, useAppSelector } from "../../store/store";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const VolumeSlider = () => {
	const Dispatch = useAppDispatch();
	const Volume = useAppSelector((state) => state.PlayerReducer.Volume);
	return (
		<Wrapper>
			<VolumeMuteIcon color="primary" sx={{ fontSize: 20 }} />
			<Range
				type="range"
				min="0"
				max="100"
				value={Volume * 100}
				onChange={(e) => {
					Dispatch(SetVolume({ volume: parseFloat(e.target.value) / 100 }));
				}}
			/>
			<VolumeUpIcon color="primary" sx={{ fontSize: 20 }} />
		</Wrapper>
	);
};
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0.75em;
	right: 1em;
`;
const Range = styled.input`
	&:hover {
		cursor: pointer;
	}
`;

export default VolumeSlider;
