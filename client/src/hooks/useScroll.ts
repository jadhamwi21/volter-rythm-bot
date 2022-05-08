import { useLayoutEffect, useRef } from "react";
import { Message } from "../typescript/types";

const useScroll = (ChatMessages: { [messageKey: number]: Message }) => {
	const RoomRef = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		if (RoomRef.current !== null) {
			RoomRef.current.scrollTo({
				top: RoomRef.current.scrollHeight,
			});
		}
	}, [ChatMessages]);
	return RoomRef;
};

export default useScroll;
