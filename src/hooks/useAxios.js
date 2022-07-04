import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (baseUrl, initalState = []) => {
	const [state, setState] = useState(initalState);
	const addToState = async (restOfUrl = "") => {
		const fullUrl = restOfUrl === "" ? baseUrl : `${baseUrl}/${restOfUrl}`;
		const response = await axios.get(fullUrl);
		setState((state) => [...state, { ...response.data, id: uuid() }]);
	};
	const resetState = () => {
		setState(() => initalState);
	};
	return [state, addToState, resetState];
};

export default useAxios;
