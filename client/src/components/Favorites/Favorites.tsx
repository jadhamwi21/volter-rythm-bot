import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { processCommand } from "../../bot/logic";
import { GetFavorites, RemoveFromFavorites } from "../../helper/localStorage";
import { FormCommand } from "../../helper/utils";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { PlayThunk } from "../../thunks/botThunks";

interface Props {}

const Favorites = (props: Props) => {
	const [favorites, setFavorites] = useState<string[]>(GetFavorites);
	const trigger = useAppSelector((state) => state.FavoritesReducer.Trigger);
	useEffect(() => {
		setFavorites(GetFavorites());
	}, [trigger]);
	const { Base, Play } = useAppSelector((state) => state.CommandsReducer);
	return (
		<>
			<Header>Favorites</Header>
			<Wrapper>
				{favorites.map((favorite, index) => (
					<Favorite key={index}>
						<Title
							onClick={() =>
								processCommand(FormCommand(Base, Play) + ` ${favorite}`)
							}
						>
							{favorite}
						</Title>
						<Remove onClick={() => RemoveFromFavorites(favorite)}>
							Delete
						</Remove>
					</Favorite>
				))}
				{favorites.length === 0 && <div>No Favorites</div>}
			</Wrapper>
		</>
	);
};
const Header = styled.h2`
	color: #0474ea;
	display: block;
	width: fit-content;
	height: fit-content;
	margin: 0 auto;
	margin-top: 2em;
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2em;
`;

const Favorite = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin: 1em 0px;
`;

const Title = styled.div`
	margin: 0px;
	padding: 0px;
	cursor: pointer;
	color: rgba(0, 0, 0, 0.8);
	&:hover {
		color: black;
	}
`;

const Remove = styled.div`
	text-decoration: underline;
	margin-left: 10em;
	cursor: pointer;
`;

export default Favorites;
