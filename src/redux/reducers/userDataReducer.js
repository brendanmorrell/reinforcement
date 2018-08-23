import * as types from '../constants/userDataConstants.js';

const initialState = {
  uuid: null,
  name: null,
  favorites: [],
  favoriteActionQuery: null,
  active: false,
  age: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.POPULATE_USER_DATA: {
      const { name, uuid, favorites, age } = action.payload;
      return { name, uuid, favorites, age };
    }
    case types.CLEAR_USER_DATA: {
      return initialState;
    }
    case types.ADD_FAVORITE_REQUEST: {
      let favorites = state.favorites.concat(action.payload);
      return {
        ...state,
        favorites,
        active: true,
        favoriteActionQuery: action.payload,
        error: false,
      };
    }
    case types.ADD_FAVORITE_SUCCESS: {
      return { ...state, active: false, favoriteActionQuery: null };
    }
    case types.ADD_FAVORITE_ERROR: {
      let favorites = state.favorites.fill(x => x !== action.payload);
      return { ...state, favorites, active: false, favoriteActionQuery: null, error: action.error };
    }
    default:
      return state;
  }
};
