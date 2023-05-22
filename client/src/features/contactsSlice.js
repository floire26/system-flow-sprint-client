import { createSlice } from "@reduxjs/toolkit";
import { fetchContactById, fetchContacts } from "../helpers/contactsHelpers";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        all: [],
        selected: {},
        isLoading: false
    },
    reducers: {
        contactsLoading: state => {
            state.isLoading = true;
        },
        receivedAll: state => {
            state.isLoading = false;
            state.all = action.payload;
        },
        receivedSelected: state => {
            state.isLoading = false;
            state.selected = action.payload;
        },
    }
})

export const { contactsLoading, receivedAll, receivedSelected } = contactsSlice.actions;
export default contactsSlice.reducer
