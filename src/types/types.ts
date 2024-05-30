export interface User {
    name: string | null;
    email: string | null;
}

export interface AuthResponse {
    user: User;
    token: string;
}

export interface AuthCredentials {
    name: string;
    email: string;
    password: string;
}

export interface AuthState {
    user: User
    token: string | null,
    error: string | null,
    isLoggedIn: boolean,
    isRefreshing: boolean,
    isLoading: boolean
}