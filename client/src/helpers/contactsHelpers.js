import axios from "axios";
import { contactsLoading, receivedSelected } from "../features/contactsSlice";

export function fetchContacts() {
    return async dispatch => {
        dispatch(contactsLoading());
        const response = await axios.get(import.meta.env.VITE_BASE_URL);
        dispatch(receivedAll(response.data.data));
    }
}

export function fetchContactById(id) {
    return async dispatch => {
        dispatch(contactsLoading());
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/${id}`);
        dispatch(receivedSelected(response.data.data));
    }
}

export function postContact(body) {
    return async dispatch => {
        dispatch(contactsLoading());
        await axios.post(import.meta.env.VITE_BASE_URL, body);
        dispatch(fetchContacts());
    }
}

export function deleteContacts(id) {
    return async dispatch => {
        await axios.get(`${import.meta.env.VITE_BASE_URL}/${id}`);
        dispatch(fetchContacts());
    }
}

export function putContacts(id, body) {
    return async dispatch => {
        await axios.put(`${import.meta.env.VITE_BASE_URL}/${id}`, body);
        dispatch(fetchContacts());
    }
}
