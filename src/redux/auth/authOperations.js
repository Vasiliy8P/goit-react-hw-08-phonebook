import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(token) {
        axios.defaults.headers.common.Authorization = "";
    }
}

export const register = createAsyncThunk('auth/register',
    async (credentials) => {
        try {
            const response = await axios.post("/users/signup", credentials);
            token.set(response.data.token);
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
);

export const login = createAsyncThunk('auth/login',
    async (credentials) => {
        try {
            const response = await axios.post("/users/login", credentials);
            token.set(response.data.token);
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
);

export const logout = createAsyncThunk('auth/logout',
    async () => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            return error.message;
        }
    }
);
