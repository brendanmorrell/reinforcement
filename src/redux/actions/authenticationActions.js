import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../constants/authenticationConstants.js';

export const logIn = () => ({ type: types.LOG_IN_START });
export const logOut = () => ({ type: types.LOG_OUT });

function* startLogIn() {
  try {
    // call takes the api call and a url
    const uuid = yield call(
      () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('1234555');
            reject('google authentication failed');
          }, 2000);
        })
    );
    yield put({ type: types.LOG_IN_SUCCESS, uuid });
  } catch (e) {
    yield put({ type: types.LOG_IN_ERROR, error: e });
  }
}

export function* authenticationWatcher() {
  //pending
  yield takeLatest(types.LOG_IN_START, startLogIn);
}
