import { BotReducer } from "../slices/bot";
import { MessagesReducer } from "../slices/messages";
import { PlayerReducer } from "../slices/player";
import { UserReducer } from "../slices/user";
import { ShortcutsReducer } from "../slices/shortcuts";
import { CommandsReducer } from "../slices/commands";
import { FavoritesReducer } from "../slices/favorites";

export const reducer = {
	UserReducer,
	MessagesReducer,
	PlayerReducer,
	BotReducer,
	ShortcutsReducer,
	CommandsReducer,
	FavoritesReducer,
};
