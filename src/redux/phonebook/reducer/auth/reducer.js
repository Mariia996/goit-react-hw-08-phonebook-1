import { combineReducers, createReducer } from '@reduxjs/toolkit';

import actions from './actions';

const initialStateUser = {
  name: "",
  email: "",
  password: "",
  loading: false,
};

const initialStateIsAuthenticated = false;

const initialStateToken = null;

const initialStateError = null;

const userReducer = createReducer(initialStateUser, {
  [actions.registerRequest]: (state) => ({ ...state, loading: true }),
  [actions.loginRequest]: (state) => ({ ...state, loading: true }),
  [actions.registerSuccess]: (_, { payload }) => ({
    ...payload.user,
    loading: false,
  }),
  [actions.loginSuccess]: (_, { payload }) => ({
    ...payload.user,
    loading: false,
  }),
  [actions.currentUserRequest]: (state) => ({ ...state, loading: true }),
  [actions.currentUserSuccess]: (_, { payload }) => ({
    ...payload.user,
    loading: false,
  }),
  [actions.registerError]: (state) => ({ ...state, loading: false }),
  [actions.loginError]: (state) => ({ ...state, loading: false }),
  [actions.logoutRequest]: (state) => ({ ...state, loading: true }),
  [actions.logoutSuccess]: () => initialStateUser,
  [actions.logoutRequest]: (state) => ({ ...state, loading: false }),
});

const isAuthenticatedReducer = createReducer(initialStateIsAuthenticated, {
  [actions.registerSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  [actions.currentUserSuccess]: () => true,
  [actions.registerError]: () => false,
  [actions.loginError]: () => false,
  [actions.currentUserError]: () => false,
  [actions.logoutSuccess]: () => false,
});

const tokenReducer = createReducer(initialStateToken, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => initialStateToken,
});

const errorReducer = createReducer(initialStateError, {
  [actions.registerError]: (_, { payload }) => payload,
  [actions.registerSuccess]: () => initialStateError,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.loginSuccess]: () => initialStateError,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.logoutSuccess]: () => initialStateError,
  [actions.currentUserError]: (state) => ({ ...state, loading: false }),
  [actions.currentUserSuccess]: () => initialStateError,
});

const reducer = combineReducers({
  user: userReducer,
  isAuthenticated: isAuthenticatedReducer,
  token: tokenReducer,
  error: errorReducer,
});

export default reducer;