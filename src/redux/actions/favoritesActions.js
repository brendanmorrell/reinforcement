import * as types from '../constants/actionTypes.js';

export const addFavorite = favorite => ({ type: types.ADD_FAVORITE, payload: favorite });
