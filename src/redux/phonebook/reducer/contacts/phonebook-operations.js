import axios from "axios";

import { addContactSuccess, deleteContactsSuccess } from './phonebookContacts-reducer';
import {
    getContactsRequest,
    getContactSuccess,
    getContactsError,
    addContactsRequest,
    addContactsError,
    deleteContactsRequest,
    deleteContactsError
} from './phonebookLoading-reducer';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = () => async dispatch => {
    dispatch(getContactsRequest());

    try {
        const { data } = await axios.get('/contacts');

        dispatch(getContactSuccess(data));
    } catch (error) {
        dispatch(getContactsError(error));
    }
};

export const addContactsFetch = (contact) => async dispatch => {
    dispatch(addContactsRequest());

    try {
        const { data } = await axios.post('/contacts', contact);

        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactsError(error));
    }
};

export const deleteContactsFetch = (id, idx) => async dispatch => {
    dispatch(deleteContactsRequest());

    try {
        await axios.delete(`/contacts/${id}`);

        dispatch(deleteContactsSuccess(idx));
    } catch (error) {
        dispatch(deleteContactsError(error));
    }
};