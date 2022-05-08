import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import PageMapper from "./components/Paginator/PageMapper";
import SongPlayer from "./components/SongPlayer/SongPlayer";

import { PaginatorProvider } from "./context/PaginatorProvider";
import { socketSetup } from "./helper/socketSetup";
import usePlayerController from "./hooks/usePlayerController";
import { useHandlers } from "./hooks/useHandlers";
import { HotKeys } from "react-hotkeys";
import { useMediaQuery } from "react-responsive";
import BotNotSupported from "./components/BotNotSupported/BotNotSupported";
export const socket = socketSetup();
const App = () => {
	usePlayerController();
	const { handlers, KeyMaps } = useHandlers();
	const Match = useMediaQuery({ query: "(max-width:768px)" });
	const firstRender = useRef(true);
	const [isMobile, setIsMobile] = useState(false);
	useLayoutEffect(() => {
		if (firstRender.current === true) {
			if (Match) {
				socket.disconnect();
				setIsMobile(true);
			} else {
				socket.connect();
				setIsMobile(false);
			}
			firstRender.current = false;
		}
	}, [Match]);
	return (
		<Container>
			<HotKeys handlers={handlers} keyMap={KeyMaps} allowChanges={true}>
				<PaginatorProvider>
					{!isMobile ? (
						<>
							<PageMapper />
							<SongPlayer />
						</>
					) : (
						<BotNotSupported />
					)}
				</PaginatorProvider>
			</HotKeys>
		</Container>
	);
};
const Container = styled.div`
	height: 100vh;
	width: 100vw;
	position: relative;
`;

export default App;
