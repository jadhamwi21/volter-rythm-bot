import React from "react";
import styled from "styled-components";
import ArrowRight from "../../assets/arrow_right_icon.svg";
import { PaginatorContext } from "../../context/PaginatorProvider";

const NextButton = () => {
	return (
		<PaginatorContext.Consumer>
			{({ MoveToNextPage }) => (
				<Button onClick={MoveToNextPage}>
					<ButtonContentWrapper>
						Next
						<ArrowElement src={ArrowRight} />
					</ButtonContentWrapper>
				</Button>
			)}
		</PaginatorContext.Consumer>
	);
};
const Button = styled.button`
	background-color: #304ffe;
	outline: none;
	border: none;
	text-transform: uppercase;
	font-size: 20px;
	color: white;
	padding: 12px 24px;
	border-radius: 6px;
	font-weight: normal;
	position: absolute;
	bottom: 2em;
	left: 50%;
	transform: translateX(-50%);
	line-height: 1.5;
	box-sizing: border-box;
	cursor: pointer;
`;
const ButtonContentWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
`;
const ArrowElement = styled.img`
	height: 30px;
	width: 30px;
	margin-left: 1em;
`;

export default NextButton;
