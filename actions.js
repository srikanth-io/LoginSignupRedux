export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const SET_ERROR = 'SET_ERROR';

export const signup = (userData) => ({
  type: SIGNUP,
  payload: userData,
});

export const login = (email) => ({
  type: LOGIN,
  payload: email,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});