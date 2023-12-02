import {spawn} from 'redux-saga/effects';
import {rootSampleSaga} from './Sample';
import {rootHomeSaga} from './HomeSaga';
import {rootActivitiesSaga} from './ActivitiesSaga';

export default function* rootSaga() {
  yield spawn(rootSampleSaga);
  yield spawn(rootHomeSaga);
  yield spawn(rootActivitiesSaga);
}
