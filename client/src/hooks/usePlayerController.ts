import { Howl } from "howler";
import { useEffect, useRef } from "react";
import { PlayerSourceRetrigger } from "../helper/utils";
import { SetSource } from "../slices/player";
import { useAppDispatch, useAppSelector } from "../store/store";
import { SkipThunk } from "../thunks/botThunks";
import { Playback as PlaybackEnum } from "../typescript/types";

const usePlayerController = () => {
	const { Source, Playback, Loop, Volume } = useAppSelector(
		(state) => state.PlayerReducer
	);
	const Dispatch = useAppDispatch();
	const Skip = () => {
		Dispatch(SkipThunk({ autoSkip: true }));
	};
	return { Source, Playback, Loop, Skip, Volume };
};

export default usePlayerController;
