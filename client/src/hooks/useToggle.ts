import { useState } from "react";

const useToggle = () => {
	const [toggled, setToggled] = useState(false);

	const toggle = () => {
		setToggled((prevState) => !prevState);
	};

	return {
		toggled,
		toggle,
	};
};

export default useToggle;
