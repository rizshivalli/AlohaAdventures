import {spawn} from 'redux-saga/effects';
import {rootSampleSaga} from './Sample';
import {rootHomeSaga} from './HomeSaga';

export default function* rootSaga() {
  yield spawn(rootSampleSaga);
  yield spawn(rootHomeSaga);
}
