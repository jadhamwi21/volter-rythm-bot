import { useState } from "react";

export enum PAGES {
	WELCOME,
	PLAY,
	PAUSE,
	RESUME,
	SKIP,
	LOOP,
	VOICE,
	EXIT,
	BOT,
}

const PagesArray = [
	PAGES.WELCOME,
	PAGES.PLAY,
	PAGES.PAUSE,
	PAGES.RESUME,
	PAGES.SKIP,
	PAGES.LOOP,
	PAGES.EXIT,
	PAGES.VOICE,
	PAGES.BOT,
];

const usePage = () => {
	const [currentPageIndex, setCurrentPageIndex] = useState(0);
	const MoveToNextPageHandler = () => {
		setCurrentPageIndex((prevPageIndex) => prevPageIndex + 1);
	};

	return {
		MoveToNextPage: MoveToNextPageHandler,
		CurrentPage: PagesArray[currentPageIndex],
	};
};

export default usePage;
