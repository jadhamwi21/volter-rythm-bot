import { AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { PagesLayoutProps } from "../../typescript/interfaces";
import PageTransition from "./PageTransition";

const PagesLayout = ({ CurrentPage, children }: PagesLayoutProps) => {
	return (
		<Layout>
			<AnimatePresence exitBeforeEnter>
				<PageTransition Key={CurrentPage}>{children}</PageTransition>
			</AnimatePresence>
		</Layout>
	);
};

const Layout = styled.section`
	box-sizing: border-box;
	padding: 0px;
`;

export default PagesLayout;
