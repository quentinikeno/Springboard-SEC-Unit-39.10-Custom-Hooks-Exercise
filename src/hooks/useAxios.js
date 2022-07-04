import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (url, initalState = []) => {
	const [state, setState] = useState(initalState);
	const addToState = async () => {
		const response = await axios.get(url);
		setState((state) => [...state, { ...response.data, id: uuid() }]);
	};
	return [state, addToState];
};

export default useAxios;
