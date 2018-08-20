import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import favoritesReducer from './reducers/favoritesReducer.js';
import appStatusReducer from './reducers/appStatusReducer.js';

export default () => {
  const store = createStore(
    combineReducers({
      favorites: favoritesReducer,
      appStatus: appStatusReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};
