import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { User, AuthResponse, AuthCredentials } from '../../types/types';
import { RootState } from "../store";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


const setAuthHeader = (token: string) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

const handleError = (error: unknown) => {
    if (axios.isAxiosError(error) && error.response) {
        // Axios specific error with response
        return error.response.data.message || error.message;
    }
    if (error instanceof Error) {
        // General Error
        return error.message;
    }
    return String(error);
};

export const register = createAsyncThunk<AuthResponse, AuthCredentials>(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/signup', credentials);
            // After successful registration, add the token to the HTTP header
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            const message = handleError(error)
            Notify.failure(
                'User with such data is already exists or you used invalid data, try again.'

            );
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const logIn = createAsyncThunk<AuthResponse, AuthCredentials>(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentials);
            // After successful login, add the token to the HTTP header
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            const message = handleError(error);
            Notify.failure('You used invalid data, check it and try again.');
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const logOut = createAsyncThunk<void, void>('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        const message = handleError(error);
        return thunkAPI.rejectWithValue(message);
    }
});

export const refreshUser = createAsyncThunk<User, void, { state: RootState }>(
    'auth/current',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            const message = handleError(error);
            Notify.failure('refreshUser failed');
            return thunkAPI.rejectWithValue(message);
        }
    }
);