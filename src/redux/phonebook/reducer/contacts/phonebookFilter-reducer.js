import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'phonebook',
    initialState: '',
    reducers: {
        handleFilter(_, { payload }) {
            return payload;
        }
    }
});

const { actions, reducer } = filterSlice;
export const { handleFilter } = actions;

export default reducer;