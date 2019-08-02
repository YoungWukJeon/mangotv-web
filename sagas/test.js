import { all, call, put, fork, takeLatest } from 'redux-saga/effects';
import { CHANGE_TITLE_REQUEST, CHANGE_TITLE_SUCCESS, CHANGE_TITLE_FAIRURE } from '../reducers/test';
import axios from 'axios';

function apiCall() {
  return axios.get('/users');
}

function* changeTitle(action) {
  try {
    const res = yield call(apiCall);
    yield put({
      type: CHANGE_TITLE_SUCCESS,
      title: action.title,
      changed: action.changed
    })
  } catch (e) {
    console.log(e);
    yield put({
      type: CHANGE_TITLE_FAIRURE
    })
  }
}

function* watchChangeTitle() {
  yield takeLatest(CHANGE_TITLE_REQUEST, changeTitle);
}

export default function* testSaga() {
  yield all([
    fork(watchChangeTitle)
  ])
}