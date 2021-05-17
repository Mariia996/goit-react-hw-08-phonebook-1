import { configureStore, combineReducers } from '@reduxjs/toolkit';

import contactsReducer from './phonebook/reducers/phonebookContacts-reducer';
import filterReducer from './phonebook/reducers/phonebookFilter-reducer';
import loadingReducer from './phonebook/reducers/phonebookLoading-reducer';

const appPhonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer
});

const rootReducer = combineReducers({
    phonebook: appPhonebookReducer,
});


const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;