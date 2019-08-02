import {all, call} from 'redux-saga/effects';
import test from './test';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export default function* rootSaga() {
  yield all([
    call(test)
    // saga 추가
  ])
}