import { createSlice } from "@reduxjs/toolkit";

export const contactsSliceTest = createSlice({
    name: 'contacts',
    initialState: {
        all: [],
        selected: {},
        isLoading: false,
        isLoadingForm: false,
        isAdd: true,
        pages: [],
        pageState: 0
    },
    reducers: {
        contactsLoading: state => {
            state.isLoading = false;
        },
        contactsFormLoading: state => {
            state.isLoadingForm = true;
        },
        receivedAll: (state, action) => {
            state.isLoading = false;
            state.all = action.payload;
        },
        receivedSelected: (state, action) => {
            state.isLoadingForm = false;
            state.selected = action.payload;
            state.isAdd = false;
        },
        setToAddForm: state => {
            state.selected = {
                firstName: '',
                lastName: '',
                age: 0,
                photo: ''
            };
            state.isAdd = true;
        }
    }
})

export const { contactsLoading, contactsFormLoading, receivedAll, receivedSelected, setToAddForm } = contactsSliceTest.actions;
export default contactsSliceTest.reducer
