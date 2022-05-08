import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import {
	AddToFavorites,
	CheckIfFavorite,
	RemoveFromFavorites,
} from "../helper/localStorage";
import { useAppSelector } from "../store/store";
import { bot_message } from "../typescript/interfaces";
export const useLocalStorage = (message: bot_message) => {
	const [isFavorite, setIsFavorite] = useState<boolean | null>(null);
	const trigger = useAppSelector((state) => state.FavoritesReducer.Trigger);
	const FavoriteHandler = useCallback(() => {
		if (message.dataWithTheMessage) {
			const title = message.dataWithTheMessage.title;
			if (isFavorite) {
				RemoveFromFavorites(title);
				setIsFavorite(false);
			} else {
				AddToFavorites(title);
				setIsFavorite(true);
			}
		}
	}, [isFavorite]);
	useLayoutEffect(() => {
		if (message.dataWithTheMessage) {
			if (CheckIfFavorite(message.dataWithTheMessage.title)) {
				setIsFavorite(true);
			} else {
				setIsFavorite(false);
			}
		}
	}, [message, trigger]);

	return { isFavorite, FavoriteHandler };
};
