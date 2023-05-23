import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contactsSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer
    }
})
