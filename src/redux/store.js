import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './phonebook/reducer/contacts/phonebookContacts-reducer';
import filterReducer from './phonebook/reducer/contacts/phonebookFilter-reducer';
import loadingReducer from './phonebook/reducer/contacts/phonebookLoading-reducer';
import userReducer from './phonebook/reducer/auth/reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
};

const appPhonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer
});

const rootReducer = combineReducers({
  phonebook: appPhonebookReducer,
  auth: persistReducer(authPersistConfig, userReducer)
});



const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
    devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default {store, persistor};