import React from "react";
import styled from "styled-components";
import { MenuListProps } from "../../typescript/interfaces";

const MenuList = ({ SelectFavorites, SelectOptions }: MenuListProps) => {
	return (
		<List>
			<ListItem onClick={SelectOptions}>Options</ListItem>
			<ListItem onClick={SelectFavorites}>Favorites</ListItem>
		</List>
	);
};
const List = styled.ul`
	list-style: none;
	height: fit-content;
	width: fit-content;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1em 4em;
	justify-content: center;
`;
const ListItem = styled.li`
	margin: 1em auto;
	cursor: pointer;
	padding: 1em;
	border-radius: 4px;
	&:hover {
		background-color: #0474ea;
	}
	transition: all 0.2s ease;
	width: 100%;
	text-align: center;
`;

export default MenuList;
