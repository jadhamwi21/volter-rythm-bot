import React, { useState } from "react";
import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import MenuModal from "./MenuModal";
import Modal from "../Modal/Modal";

const Menu = () => {
	const { state, toggler } = useModal(false);
	return (
		<>
			<Container onClick={toggler}>
				<AnimatedFiller spread={state} />
			</Container>

			{state && (
				<Modal>
					<MenuModal toggler={toggler} />
				</Modal>
			)}
		</>
	);
};
const Container = styled.div`
	border-radius: 50%;
	width: 20px;
	height: 20px;
	border: solid 2px #0474ea;
	position: absolute;
	top: 55%;
	left: 3%;
	transform: translate(-3%, -55%);
	display: grid;
	place-items: center;
`;
const AnimatedFiller = styled.div<{ spread: boolean }>`
	background-color: #0474ea;
	border-radius: 50%;
	height: 2px;
	width: 2px;
	transform: scale(${(props) => (props.spread ? "5" : "0")});
	transition: all 0.1s ease;
`;

export default Menu;
