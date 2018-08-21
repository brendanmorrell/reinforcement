import * as types from '../constants/authenticationConstants.js';

const initialState = { isAuthenticated: false, authenticating: false, error: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN_START:
      return { ...state, isAuthenticated: false, authenticating: true, error: null };
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.uuid,
        authenticating: false,
      };
    case types.LOG_IN_ERROR:
      return {
        ...state,
        authenticating: false,
        error: action.error,
      };
    case types.LOG_OUT:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};
