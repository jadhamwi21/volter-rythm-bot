import { PAGES } from "../../hooks/usePage";
import { MapperComponentProps } from "../../typescript/interfaces";
import Welcome from "../../pages/Welcome";
import Play from "../../pages/Play";
import Pause from "../../pages/Pause";
import NextButton from "./NextButton";
import Skip from "../../pages/Skip";
import Resume from "../../pages/Resume";
import Loop from "../../pages/Loop";
import Voice from "../../pages/Voice";
import Bot from "../../pages/Bot";
import Exit from "../../pages/Exit";
export const MapperComponent = ({ currentPage }: MapperComponentProps) => {
	return (
		<>
			{currentPage === PAGES.WELCOME && <Welcome />}
			{currentPage === PAGES.PLAY && <Play />}
			{currentPage === PAGES.PAUSE && <Pause />}
			{currentPage === PAGES.RESUME && <Resume />}
			{currentPage === PAGES.SKIP && <Skip />}
			{currentPage === PAGES.LOOP && <Loop />}
			{currentPage === PAGES.EXIT && <Exit />}
			{currentPage === PAGES.VOICE && <Voice />}
			{currentPage === PAGES.BOT && <Bot />}
			{currentPage !== PAGES.BOT && <NextButton />}
		</>
	);
};
