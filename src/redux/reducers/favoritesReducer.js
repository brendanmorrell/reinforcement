import * as types from '../constants/actionTypes.js';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE: {
      return state.slice().concat(action.payload);
    }
    default:
      return state;
  }
};
