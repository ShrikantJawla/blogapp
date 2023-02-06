import { Auth } from "@/redux/auth/auth.types";

export interface User {
	name?: string;
	email: string;
	password: string;
	confirmPassword?:string
}
export interface InitState {
	loading: boolean;
	error: boolean;
	token: string | undefined;
	signupStatus: {
		status: number | null;
		message: string
	};
	loginStatus:{
		status: number | null;
		message: string ;
		token: string 
	}
}

export interface Action {
	type: Auth;
	payload?: any;
}

export type DispatchType = (args: Action) => Action;
