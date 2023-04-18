import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const register = createAsyncThunk('auth/register',
    async (credentials) => {
        try {
            const response = await axios.post("/users/signup", credentials);
            return response.data;
        } catch (error) {
            return error.message;
        }
    }
);