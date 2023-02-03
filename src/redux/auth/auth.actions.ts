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

export const register = (data: Data): any => async (
	dispatch: DispatchType
): Promise<void> => {
	try {
		dispatch(loading());
		await axios.post("/api/auth2/register", data);
		dispatch(success());
	} catch (err) {
		const { message }: any = err;
		console.log(err);
		dispatch(error(message));
	}
};

export const login = (data: Data): any => async (dispatch: DispatchType) => {
	try {
		dispatch(loading());
		await axios.post("/api/auth2/login", data);
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
