import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useMenu } from "../../hooks/useMenu";
import { MenuModalProps } from "../../typescript/interfaces";
import { MenuChoice } from "../../typescript/types";
import MenuList from "./MenuList";
import Options from "../Options/Options";
import CancelIcon from "@mui/icons-material/Cancel";
import Favorites from "../Favorites/Favorites";
import Layout from "./Layout";

const MenuModal = ({ toggler }: MenuModalProps) => {
	const { SelectFavorites, SelectOptions, choice, SelectInitial } = useMenu();
	return (
		<Container onClick={toggler}>
			<AnimatePresence exitBeforeEnter={true}>
				<Wrapper
					onClick={(e) => e.stopPropagation()}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.1 }}
					key={choice}
				>
					{choice === MenuChoice.Initial && (
						<MenuList
							SelectFavorites={SelectFavorites}
							SelectOptions={SelectOptions}
						/>
					)}
					{choice !== MenuChoice.Initial && (
						<Layout BackToMenu={SelectInitial}>
							{choice === MenuChoice.Options && <Options />}
							{choice === MenuChoice.Favorites && <Favorites />}
						</Layout>
					)}
				</Wrapper>
			</AnimatePresence>
		</Container>
	);
};
const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.3);
	display: grid;
	place-items: center;
`;
const Wrapper = styled(motion.div)`
	height: fit-content;
	width: fit-content;
	max-height: 80vh;
	overflow-y: auto;
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.3);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(16.5px);
	-webkit-backdrop-filter: blur(16.5px);
	border-radius: 10px;
	user-select: none;

	&::-webkit-scrollbar {
		width: 14px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		border: 4px solid rgba(0, 0, 0, 0);
		background: #0474ea;
		border-radius: 9999px;
		background-clip: padding-box;
	}
`;

export default MenuModal;
