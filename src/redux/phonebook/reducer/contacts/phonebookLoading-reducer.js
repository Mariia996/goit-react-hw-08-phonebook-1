import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
    name: 'phonebook',
    initialState: false,
    reducers: {
        getContactsRequest: () => {
            return true;
        },
        getContactSuccess: () => {
            return false;
        },
        getContactsError: () => {
            return false;
        },
        addContactsRequest: () => {
            return true;
        },
        addContactSuccess: () => {
            return false;
        },
        addContactsError: () => {
            return false;
        },
        deleteContactsRequest: () => {
            return true;
        },
        deleteContactsSuccess: () => {
            return false;
        },
        deleteContactsError: () => {
            return false;
        },
    }
});

const { actions, reducer } = loadingSlice;

export const {
    getContactsRequest,
    getContactSuccess,
    getContactsError,
    addContactsRequest,
    addContactSuccess,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError
} = actions;

export default reducer;