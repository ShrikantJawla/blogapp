import { Auth } from "@/redux/auth/auth.types";

export interface User {
	name?: string;
	email: string;
	password: string;
}
export interface InitState {
	loading: boolean;
	error: boolean;
	errorMessage: string;
	token: string | undefined;
}

export interface Action {
	type: Auth;
	payload?: any;
}

export type DispatchType = (args: Action) => Action;
