import { useState } from "react";

const useFlip = (initalVal = true) => {
	const [isFacingUp, setIsFacingUp] = useState(initalVal);
	const flipCard = () => {
		setIsFacingUp((isUp) => !isUp);
	};
	return [isFacingUp, flipCard];
};

export default useFlip;
