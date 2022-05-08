import React from "react";
import useSpeechRecognition from "../hooks/useSpeechRecognition";
import BotChat from "../components/BotInterface/BotChat";
import BotHeader from "../components/BotInterface/BotHeader";

const Bot = () => {
	useSpeechRecognition();
	return (
		<React.Fragment>
			<BotHeader />
			<BotChat />
		</React.Fragment>
	);
};

export default Bot;
