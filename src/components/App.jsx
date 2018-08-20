import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/configure.js';
import '../styles/styles.scss';

const store = configureStore();

export default () => {
  return (
    <div>
      <Provider store={store}>
        <h1>this is the app</h1>
      </Provider>
    </div>
  );
};
