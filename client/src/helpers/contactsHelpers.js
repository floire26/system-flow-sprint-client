import axios from "axios";
import { contactsLoading, receivedSelected, receivedAll, contactsFormLoading } from "../features/contactsSlice";
import { toast } from "react-toastify";

export function fetchContacts() {
    return async dispatch => {
        try {
            dispatch(contactsLoading());
            const response = await axios.get(import.meta.env.VITE_SERVER_URL);
            dispatch(receivedAll(response.data.data));
        } catch (error) {
            toast.error("Failed to retrieve contacts. Please refresh the page to try again.", {
                theme: 'colored'
            })
        }
    }
}

export function fetchContactById(id) {
    return async dispatch => {
        try {
            dispatch(contactsFormLoading());
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/${id}`);
            dispatch(receivedSelected(response.data.data));
        } catch (error) {
            toast.error("Failed to retrieve information of the selected contact. Please refresh the page to try again.", {
                theme: 'colored'
            })
        }
    }
}

export function postContact(body) {
    return async dispatch => {
        try {
            console.log(body, '<- before posting');

            await axios.post(import.meta.env.VITE_SERVER_URL, body, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Access-Control-Allow-Credentials': true,
                },
                withCredentials: true
            });
            // console.log('success post');
            toast.success(`${body.firstName} ${body.lastName} has been successfully added to contacts.`, {
                theme: 'colored'
            })
            dispatch(fetchContacts());
        } catch (error) {
            toast.error(`Request to add ${body.firstName} ${body.lastName} to contacts is unsuccessful. Please try again later.`, {
                theme: 'colored'
            })
        }
    }
}

export function deleteContact(id) {
    return async dispatch => {
        try {
            await axios.delete(`${import.meta.env.VITE_SERVER_URL}/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Access-Control-Allow-Credentials': true,
                },
                withCredentials: true
            });
            dispatch(fetchContacts());
        } catch (error) {
            toast.error("Delete request is unsuccessful. Please try again later.", {
                theme: 'colored'
            })
        }
    }
}

export function putContact(id, body) {
    return async dispatch => {
        try {
            delete(body.id);
            await axios.put(`${import.meta.env.VITE_SERVER_URL}/${id}`, body, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Access-Control-Allow-Credentials': true,
                },
                withCredentials: true
            });
            // console.log('success edit');
            toast.success(`Contact of ${body.firstName} ${body.lastName} has been successfully updated.`, {
                theme: 'colored'
            })
            dispatch(fetchContacts());
        } catch (error) {
            toast.error("Edit request is unsuccessful. Please try again later.", {
                theme: 'colored'
            })
        }
    }
}
