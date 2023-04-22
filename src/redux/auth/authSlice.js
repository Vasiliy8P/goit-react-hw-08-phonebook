import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshCurrentUser, register } from "./authOperations";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: { name: null, email: null, password: null },
        token: null,
        isLoggedIn: false,
        isLoading: false,
    },
    extraReducers: {
        [register.pending](state) {
            state.isLoggedIn = false;
            state.isLoading = true;
        },
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [register.rejected](state) {
            state.isLoggedIn = false;
            state.isLoading = false;
        },
        [login.pending](state) {
            state.isLoggedIn = false;
            state.isLoading = true;
        },
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [login.rejected](state) {
            state.isLoggedIn = false;
            state.isLoading = false;
        },

        [logout.pending](state) {
            state.isLoggedIn = false;
            state.isLoading = true;
        },
        [logout.fulfilled](state, action) {
            state.user = { name: null, email: null, password: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isLoading = false;
        },
        [logout.rejected](state) {
            state.isLoggedIn = false;
            state.isLoading = false;
        },

        [refreshCurrentUser.pending](state) {
            state.isLoggedIn = false;
            state.isLoading = true;
        },
        [refreshCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [refreshCurrentUser.rejected](state) {
            state.isLoggedIn = false;
            state.isLoading = false;
        },
    }
})

export const authReducer = authSlice.reducer;