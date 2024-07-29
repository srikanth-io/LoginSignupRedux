import { SIGNUP, LOGIN, SET_ERROR } from './actions';

const initialState = {
  userData: [],
  loggedInUser: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        userData: [...state.userData, action.payload],
        error: null,
      };
    case LOGIN:
      const user = state.userData.find((user) => user.email === action.payload);
      return {
        ...state,
        loggedInUser: user || null,
        error: user ? null : 'User not found',
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;