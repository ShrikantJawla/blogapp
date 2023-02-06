import { Action, InitState } from "@/utils/Types";
import { Auth } from "./auth.types";


function getToken() {
	if (typeof window !== "undefined")
		return localStorage.getItem("blogAppToken") || "";
}

const initState: InitState = {
	loading: false,
	error: false,
	token: getToken() !== "" ? getToken() : "",
	signupStatus: { status: null, message: '' },
	loginStatus: {
		status: null,
		message: '',
		token:''
	}
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
		case Auth.SIGNUPSTATUS: {
			return {
				...state,
				signupStatus: payload,
			};
		}
		case Auth.RESETSTATUS: {
			return {
				...state,
				signupStatus: {
					...state.signupStatus,
					status: null,
					message: ''
				},
			};
		}
		case Auth.LOGINSTATUS: {
			return {
				...state,
				loginStatus: {...payload},
			};
		}
		case Auth.RESETLOGINSTATUS: {
			return {
				...state,
				loginStatus: {
					...state.loginStatus,
					status: null,
					message: '',
					token:''
				},
			};
		}
		case Auth.ERROR:
			return {
				...state,
				error: false,
				loading: false,
			};
		case Auth.LOGIN:{
			if (typeof window !== "undefined")
				localStorage.setItem("blogAppToken", payload);
			return {
				...state,
				token: payload,
			};}
		case Auth.LOGOUT: {
			if (typeof window !== "undefined")
				localStorage.removeItem("blogAppToken");
			return {
				...state,
				token:''
			};
		}
		default:
			return state;
	}
};
