import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { secondsFormatToHoursMinutesSeconds } from "../../helper/utils";
import useToggle from "../../hooks/useToggle";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { BotMessageProps } from "../../typescript/interfaces";

const BotMessage = ({ message }: BotMessageProps) => {
	const containsData = "dataWithTheMessage" in message;
	const { toggled, toggle } = useToggle();
	const { isFavorite, FavoriteHandler } = useLocalStorage(message);
	return (
		<MessageWrapper>
			<MessageBox withDataDetailsLink={containsData}>
				<AnimatePresence exitBeforeEnter>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						key={message.Content}
					>
						{message.Content}
					</motion.div>
				</AnimatePresence>
				{containsData && (
					<ShowDetailsElement onClick={toggle}>
						{toggled ? "Hide" : "Show"} Details
					</ShowDetailsElement>
				)}
			</MessageBox>
			<AnimatePresence exitBeforeEnter={true}>
				{containsData && toggled && (
					<DetailsContainer
						initial={{ opacity: 0, translateY: "-50%" }}
						animate={{ opacity: 1, translateY: "0%" }}
						exit={{ opacity: 0, translateY: "-50%" }}
						transition={{ ease: "linear", duration: 0.15 }}
						key={toggled ? 1 : 0}
					>
						<DetailsDataWrapper>
							<Detail>Title : {message.dataWithTheMessage?.title}</Detail>
							<Detail>
								Duration :{" "}
								{secondsFormatToHoursMinutesSeconds(
									message.dataWithTheMessage?.duration!
								)}
							</Detail>
							<Detail>
								Position In Queue :{" "}
								{message.dataWithTheMessage?.positionInQueue}
							</Detail>
							<Favorite onClick={FavoriteHandler}>
								{isFavorite === true
									? "Remove From Favorites"
									: "Add To Favorite"}
							</Favorite>
						</DetailsDataWrapper>
						<Thumbnail src={message.dataWithTheMessage?.thumbnail} />
					</DetailsContainer>
				)}
			</AnimatePresence>
		</MessageWrapper>
	);
};
const MessageWrapper = styled.div`
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin: 1em 0px;
`;
const MessageBox = styled.div<{
	withDataDetailsLink: boolean;
}>`
	background-color: #0474ea;
	height: fit-content;
	width: auto;
	min-width: 350px;
	max-width: 450px;
	color: white;
	border-radius: 4px;
	padding: 0.75em;
	position: relative;
	z-index: ${(props) => (props.withDataDetailsLink ? 3 : 0)};
	padding-bottom: ${(props) => (props.withDataDetailsLink ? "2.25em" : "")};
`;
const ShowDetailsElement = styled.p`
	position: absolute;
	bottom: -10px;
	right: 5px;
	cursor: pointer;
	text-decoration: underline;
`;

const DetailsContainer = styled(motion.div)`
	background-color: rgba(0, 0, 0, 0.2);
	height: fit-content;
	width: 100%;
	color: black;
	padding: 1em;
	position: relative;
	z-index: 1;
	border-radius: 6px;
	user-select: none;
`;
const Detail = styled.div``;
const DetailsDataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 240px;
`;
const Thumbnail = styled.img`
	height: 90px;
	width: 90px;
	position: absolute;
	top: 50%;
	right: 1em;
	transform: translateY(-50%);
	border-radius: 50%;
`;
const Favorite = styled.div`
	text-decoration: underline;
	font-size: 14px;
	cursor: pointer;
`;

export default BotMessage;
