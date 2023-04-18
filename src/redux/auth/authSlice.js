import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperations";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: '', email: '', password: '' },
        token: "",
        isLoggedIn: false,
    },
    extraReducers: {
        [register.pending](state) {
            state.isLoggedIn = false;
        },
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
    }
})

export const authReducer = authSlice.reducer;