import React, { useEffect } from "react";
//@ts-ignore
import ArtYom from "artyom.js";
import { store } from "../store/store";
import { processCommand } from "../bot/logic";
import { FormCommand } from "../helper/utils";

const useSpeechRecognition = () => {
	const artyom = new ArtYom();
	useEffect(() => {
		const PlayVoiceCommand = () => {
			artyom.on(["play *"], true).then((i: any, wildcard: any) => {
				const { Base, Play } = store.getState().CommandsReducer;
				processCommand(`${FormCommand(Base, Play)} ${wildcard}`);
			});
		};
		const PauseVoiceCommand = () => {
			artyom.on(["pause"]).then(() => {
				const { Base, Pause } = store.getState().CommandsReducer;
				processCommand(`${FormCommand(Base, Pause)}`);
			});
		};
		const ResumeVoiceCommand = () => {
			artyom.on(["resume"]).then(() => {
				const { Base, Resume } = store.getState().CommandsReducer;
				processCommand(`${FormCommand(Base, Resume)}`);
			});
		};
		const SkipVoiceCommand = () => {
			artyom.on(["skip"]).then(() => {
				const { Base, Skip } = store.getState().CommandsReducer;
				processCommand(`${FormCommand(Base, Skip)}`);
			});
		};
		const RepeatVoiceCommand = () => {
			artyom.on(["repeat"]).then(() => {
				const { Base, Repeat } = store.getState().CommandsReducer;
				processCommand(`${FormCommand(Base, Repeat)}`);
			});
		};
		const setupVoiceCommands = () => {
			PlayVoiceCommand();
			PauseVoiceCommand();
			ResumeVoiceCommand();
			SkipVoiceCommand();
			RepeatVoiceCommand();
			artyom
				.initialize({
					lang: "en-GB",
					continuous: true,
					debug: true,
					soundex: true,
					listen: true,
					mode: "normal",
					name: "hey",
				})
				.then(() => {
					console.log("Artyom has been succesfully initialized");
				})
				.catch(() => {
					console.error("Artyom couldn't be initialized: ");
				});
		};
		setupVoiceCommands();
	}, []);
};

export default useSpeechRecognition;
