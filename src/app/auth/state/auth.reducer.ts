import { createReducer } from "@ngrx/store";
import { AuthState, initialAuthState } from "./auth.state";

export const _authReducer = createReducer(initialAuthState);

export function authReducer(state: AuthState, action: any) {
    return _authReducer(state, action);
}