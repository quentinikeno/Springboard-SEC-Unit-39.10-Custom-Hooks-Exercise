import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (baseUrl, dataFormatter, initalState = []) => {
	const [state, setState] = useState(initalState);
	const addToState = async (restOfUrl = "") => {
		const fullUrl = restOfUrl === "" ? baseUrl : `${baseUrl}/${restOfUrl}`;
		const response = await axios.get(fullUrl);
		const data = dataFormatter(response.data);
		setState((state) => [...state, { ...data, id: uuid() }]);
	};
	const resetState = () => {
		setState(initalState);
	};
	return [state, addToState, resetState];
};

export default useAxios;
