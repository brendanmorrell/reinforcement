import { authenticationWatcher } from '../actions/authenticationActions.js';
import { put, takeLatest, all, call } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authenticationWatcher()]);
}
