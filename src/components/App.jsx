import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/configure.js';
// import '../styles/styles.scss';

import AppRouter, { history } from './routers/AppRouter.jsx';
const store = configureStore();

export default () => {
  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};
