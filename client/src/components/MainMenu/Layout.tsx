import React from "react";
import styled from "styled-components";

interface Props {
	BackToMenu: () => void;
	children: React.ReactNode;
}

const Layout = ({ BackToMenu, children }: Props) => {
	return (
		<Wrapper>
			<BackButton onClick={BackToMenu}>Back</BackButton>
			{children}
		</Wrapper>
	);
};
const Wrapper = styled.div`
	height: fit-content;
	width: fit-content;
	position: relative;
	padding: 0.5em;
`;
const BackButton = styled.div`
	text-decoration: underline;
	cursor: pointer;
	position: absolute;
	top: 0.5em;
	right: 0.5em;
`;

export default Layout;
