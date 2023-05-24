import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contactsSlice";
import contactsSliceTest from "../features/contactsSliceTest";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer
    }
})

export const testStore = configureStore({
    reducer: {
        contacts: contactsSliceTest
    }
})
