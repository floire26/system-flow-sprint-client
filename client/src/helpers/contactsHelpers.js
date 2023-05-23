import axios from "axios";
import { contactsLoading, receivedSelected, receivedAll } from "../features/contactsSlice";

export function fetchContacts() {
    return async dispatch => {
        try {
            dispatch(contactsLoading());
            const response = await axios.get(import.meta.env.VITE_SERVER_URL);
            dispatch(receivedAll(response.data.data));
        } catch (error) {
            console.error(error);
        }
    }
}

export function fetchContactById(id) {
    return async dispatch => {
        dispatch(contactsLoading());
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/${id}`);
        dispatch(receivedSelected(response.data.data));
    }
}

export function postContact(body) {
    return async dispatch => {
        dispatch(contactsLoading());
        await axios.post(import.meta.env.VITE_SERVER_URL, body);
        dispatch(fetchContacts());
    }
}

export function deleteContacts(id) {
    return async dispatch => {
        await axios.delete(`${import.meta.env.VITE_SERVER_URL}/${id}`);
        dispatch(fetchContacts());
    }
}

export function putContacts(id, body) {
    return async dispatch => {
        try {
            await axios.put(`${import.meta.env.VITE_SERVER_URL}/${id}`, body);
            dispatch(fetchContacts());
        } catch (error) {
            console.error(error);
        }
    }
}
