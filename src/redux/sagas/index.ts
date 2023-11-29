import {spawn} from 'redux-saga/effects';
import {rootSampleSaga} from './Sample';

export default function* rootSaga() {
  yield spawn(rootSampleSaga);
}
