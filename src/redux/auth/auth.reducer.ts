import { Action, InitState } from "@/utils/Types";
import { Auth } from "./auth.types";

let currToken: string;

function getToken() {
	if (typeof window !== "undefined")
		return localStorage.getItem("blogAppToken") || "";
}

const initState: InitState = {
	loading: false,
	error: false,
	errorMessage: "",
	token: getToken() !== "" ? getToken() : "",
};

export const authReducer = (
	state = initState,
	{ type, payload }: Action
): InitState => {
	switch (type) {
		case Auth.LOADING:
			return {
				...state,
				loading: true,
			};
		case Auth.SUCCESS: {
			return {
				...state,
				loading: false,
			};
		}
		case Auth.ERROR:
			return {
				...state,
				error: false,
				loading: false,
			};
		case Auth.LOGIN:
			if (typeof window !== "undefined")
				localStorage.setItem("blogAppToken", payload);
			return {
				...state,
				token: payload,
			};
		case Auth.LOGOUT: {
			if (typeof window !== "undefined")
				localStorage.removeItem("blogAppToken");
			return {
				...state,
			};
		}
		default:
			return state;
	}
};
