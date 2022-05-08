import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import useScroll from "../../hooks/useScroll";
import { useAppSelector } from "../../store/store";
import { SenderTypes } from "../../typescript/types";
import BotMessage from "./BotMessage";
import MessageAnimation from "./MessageAnimation";
import UserMessage from "./UserMessage";

const Messages = () => {
	const ChatMessages = useAppSelector(
		(state) => state.MessagesReducer.ChatMessages
	);
	const MessagesContainerRef = useScroll(ChatMessages);
	return (
		<MessagesContainer ref={MessagesContainerRef}>
			<AnimatePresence exitBeforeEnter>
				{Object.values(ChatMessages).map((message, index) => {
					if (message.Sender === SenderTypes.User) {
						return (
							<MessageAnimation Key={index} key={index}>
								<UserMessage message={message} key={index} />
							</MessageAnimation>
						);
					} else {
						return (
							<MessageAnimation Key={index} key={index}>
								<BotMessage message={message} key={index} />
							</MessageAnimation>
						);
					}
				})}
			</AnimatePresence>
		</MessagesContainer>
	);
};
const MessagesContainer = styled.div`
	height: calc(100vh - 120px);
	width: 100%;
	padding: 1em 1.25em;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 14px;
	}

	&::-webkit-scrollbar-track {
		background: white;
	}

	&::-webkit-scrollbar-thumb {
		border: 4px solid rgba(0, 0, 0, 0);
		background: #0474ea;
		border-radius: 9999px;
		background-clip: padding-box;
	}
`;

export default Messages;
