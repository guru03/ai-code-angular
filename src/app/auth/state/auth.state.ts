
export interface AuthState {
    isAuthenticated: boolean;
    user: any | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

export const initialAuthState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null,
};