import { useState } from "react";
import { MenuChoice } from "../typescript/types";

export const useMenu = () => {
	const [choice, setChoice] = useState<MenuChoice>(MenuChoice.Initial);
	const SelectFavorites = () => setChoice(MenuChoice.Favorites);
	const SelectOptions = () => setChoice(MenuChoice.Options);
	const SelectInitial = () => setChoice(MenuChoice.Initial);
	return { SelectFavorites, SelectOptions, choice, SelectInitial };
};
