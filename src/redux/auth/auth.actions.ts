import axios from "axios";
import { Auth } from "./auth.types";
import { DispatchType } from "../../utils/Types";

interface Data {
	name?: string;
	email: string;
	password: string;
}

const loading = () => ({ type: Auth.LOADING });

const success = () => ({ type: Auth.SUCCESS });

const error = (error: string) => ({ type: Auth.ERROR, payload: error });

export const signupStatus = (response: {
	status: number;
	message: string
}) => ({ type: Auth.SIGNUPSTATUS, payload: response });

export const resetStatus = () => ({ type: Auth.RESETSTATUS })

export const loginStatus = (response: {
	status: number;
	message: string
	token: string
}) => ({ type: Auth.LOGINSTATUS, payload: response })

export const resetLoginStatus = () => ({ type: Auth.RESETLOGINSTATUS})

export const register = (data: Data): any => async (
	dispatch: DispatchType
): Promise<void> => {
	try {
		dispatch(loading());
		let res = await axios.post("/api/auth2/register", data);
		dispatch(signupStatus(res.data));
		dispatch(success());
	} catch (err) {
		const { message }: any = err;
		console.log(err);
		dispatch(error(message));
	}
};

export const login = (data: Data): any => async (
	dispatch: DispatchType
): Promise<void> => {
	try {
		dispatch(loading());
		let res = await axios.post("/api/auth2/login", data);
		dispatch({ type: Auth.LOGIN, payload: res.data.token })
		dispatch(loginStatus(res.data))
		dispatch(success());
	} catch (err) {
		const { message }: any = err;
		console.log(err);
		dispatch(error(message));
	}
};

export const logout = (): any => async (dispatch: DispatchType) => {
	try {
		dispatch(loading());
		dispatch({ type: Auth.LOGOUT });
		dispatch(success());
	} catch (err) {
		const { message }: any = err;
		console.log(err);
		dispatch(error(message));
	}
};
