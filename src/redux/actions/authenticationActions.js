import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from '../constants/authenticationConstants.js';
import * as types2 from '../constants/userDataConstants.js';
import axios from 'axios';

export const logIn = () => ({ type: types.LOG_IN_REQUEST });
export const logOut = () => ({ type: types.LOG_OUT_REQUEST });

export const populateData = data => ({ type: types2.POPULATE_USER_DATA, payload: data });

function* startLogIn() {
  console.log('called');
  try {
    // call takes the api call and a url
    // const uuid = yield call(() => axios.get('http://localhost:3000/auth/google'));
    // console.log('from authenticationactions');
    // console.log(uuid);
    yield put({ type: types.LOG_IN_SUCCESS /* , uuid  */ });
  } catch (error) {
    yield put({ type: types.LOG_IN_ERROR, error });
  }
}

function* startLogout() {
  try {
    yield call(
      () =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        })
    );
    yield put({ type: types.LOG_OUT_SUCCESS });
  } catch (error) {
    yield put({ type: types.LOG_OUT_ERROR });
  }
}

export function* loginWatcher() {
  yield takeLatest(types.LOG_IN_REQUEST, startLogIn);
}

export function* logoutWatcher() {
  yield takeLatest(types.LOG_OUT_REQUEST, startLogout);
}
