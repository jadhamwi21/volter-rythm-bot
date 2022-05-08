import { TriggerStorageHandler } from "../slices/favorites";
import { store } from "../store/store";

const Dispatch = store.dispatch;

export const CreateLocalStorageFavoritesEntry = () => {
	localStorage.setItem("favorites", JSON.stringify([]));
};
export const CheckFavoritesEntry = () =>
	localStorage.getItem("favorites") !== null;

export const GetFavorites = (): string[] =>
	JSON.parse(localStorage.getItem("favorites")!);

export const AddToFavorites = (title: string) => {
	if (!CheckFavoritesEntry()) {
		CreateLocalStorageFavoritesEntry();
	}
	const Favorites = GetFavorites();
	Favorites.push(title);
	localStorage.setItem("favorites", JSON.stringify(Favorites));
	Dispatch(TriggerStorageHandler());
};

export const RemoveFromFavorites = (title: string) => {
	const Favorites = GetFavorites();
	Favorites.splice(Favorites.indexOf(title), 1);
	localStorage.setItem("favorites", JSON.stringify(Favorites));
	Dispatch(TriggerStorageHandler());
};

export const CheckIfFavorite = (title: string) => {
	if (!CheckFavoritesEntry()) {
		CreateLocalStorageFavoritesEntry();
	}
	const Favorites = GetFavorites();
	console.log(Favorites);
	return Favorites.indexOf(title) !== -1;
};
