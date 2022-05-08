import { useCallback, useState } from "react";

export const useModal = (initialValue: boolean) => {
	const [state, setState] = useState(initialValue);

	const toggler = useCallback(() => setState((prevState) => !prevState), []);
	return { state, toggler };
};
