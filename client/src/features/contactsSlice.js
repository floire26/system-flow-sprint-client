import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
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
            state.isLoading = true;
        },
        contactsFormLoading: state => {
            state.isLoadingForm = true;
        },
        receivedAll: (state, action) => {
            state.pages = [];
            state.isLoading = false;
            state.all = action.payload;
            // console.log(action.payload.length);
            for (let i = 0; i <= Math.ceil(action.payload.length / 10) - 1; i++) {
                state.pages.push(i);
            };
            state.pageState = 0;
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
        },
        changePage: (state, action) => {
            state.pageState = action.payload;
        }
    }
})

export const { contactsLoading, contactsFormLoading, receivedAll, receivedSelected, setToAddForm, changePage } = contactsSlice.actions;
export default contactsSlice.reducer
