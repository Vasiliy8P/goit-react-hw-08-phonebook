import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./authOperations";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null, password: null },
        token: null,
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
        [register.rejected](state) {
            state.isLoggedIn = false;
        },
        [login.pending](state) {
            state.isLoggedIn = false;
        },
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [login.rejected](state) {
            state.isLoggedIn = false;
        },

        [logout.pending](state) {
            state.isLoggedIn = false;
        },
        [logout.fulfilled](state, action) {
            state.user = { name: null, email: null, password: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [logout.rejected](state) {
            state.isLoggedIn = false;
        },
    }
})

export const authReducer = authSlice.reducer;