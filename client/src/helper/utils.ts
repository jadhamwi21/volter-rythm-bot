import { NotPermittedKeys } from "../constants/constants";
import { SetSource } from "../slices/player";
import { store } from "../store/store";

export const secondsFormatToHoursMinutesSeconds = (seconds: string) => {
	const secondsInIntegerType: number = parseInt(seconds);
	const date = new Date(secondsInIntegerType * 1000);
	const formattedTime = date.toTimeString().split(" ")[0];
	if (secondsInIntegerType < 3600) {
		return formattedTime.substring(3);
	} else {
		return formattedTime;
	}
};

export const PlayerSourceRetrigger = (Source: string) => {
	const temp = Source;
	store.dispatch(SetSource({ source: "" }));
	store.dispatch(SetSource({ source: temp }));
};

export const CheckForKeysOnly = (str: string) => {
	const keysCheck = NotPermittedKeys.every((key) => key !== str);

	return keysCheck;
};

export const Titalize = (str: string) => {
	if (str.length === 0) {
		return "";
	}
	return str[0].toUpperCase() + str.slice(1);
};

export const FormCommand = (base: string, keyword: string) => base + keyword;

export const CheckForDuplicateKeywords = (Keywords: string[]) => {
	return new Set(Keywords).size !== Keywords.length;
};
export const CheckForSpaceInBase = (Base: string) => {
	return Base.indexOf(" ") !== -1;
};

export const CheckForRestoreNeed = (Entries: Array<[string, string]>) => {
	const [_, BaseValue] = Entries.find((entry) => entry[0] === "Base")!;
	const Keywords = Entries.map((entry) => entry[1]);
	return CheckForSpaceInBase(BaseValue) || CheckForDuplicateKeywords(Keywords);
};
