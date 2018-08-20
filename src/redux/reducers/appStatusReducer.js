import * as types from '../constants/actionTypes.js';

const defaultState = { isLoading: true };

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
