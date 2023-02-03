import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";

const rootReducer = combineReducers({
	auth: authReducer,
});

export const store = legacy_createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export type StoreType = ReturnType<typeof rootReducer>;
