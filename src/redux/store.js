import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./contacts/filterSlice";
import { authReducer } from "./auth/authSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});