import {
  CallEffect,
  PutEffect,
  call,
  put,
  spawn,
  takeLatest,
} from 'redux-saga/effects';
import {FAIL, REQUEST, SUCCESS, GET_ACTIVITIES_BY_NAME} from '../actions';
import {alohaAppAPI} from '@utils/apiUtils';
import {V1_ACTIVITIES} from '../../constants/apiConstants';

export function* GetActivitiesByName({
  payload,
  callback = function () {},
}: any): Generator<
  | CallEffect<unknown>
  | PutEffect<{
      type: string;
      payload: any;
    }>,
  void,
  any
> {
  try {
    // Make the API call
    const response = yield call(
      alohaAppAPI('').get,
      `${V1_ACTIVITIES}${payload.activityName}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log('respsonsse', response.status);

    // Check if the response is successful
    if (response.status === 200) {
      const {data} = response || {};
      console.log('data', data);

      // Dispatch a success action
      yield put({
        type: `${GET_ACTIVITIES_BY_NAME}_${SUCCESS}`,
        payload: data,
      });

      // If there's a callback, call it
      if (callback) {
        callback(data);
      }
    } else {
      // If the response is not successful, throw an error
      const errorData = yield response.json();
      throw new Error(errorData.message || 'FAILED TO GET ACTIVITIES');
    }
  } catch (error: any) {
    // Dispatch a failure action
    yield put({
      type: `${GET_ACTIVITIES_BY_NAME}_${FAIL}`,
      payload: error.message,
    });

    // If there's a callback, call it with the error
    if (callback) {
      callback(error);
    }
  } finally {
    // You can add any cleanup logic here if needed
  }
}

function* GetActivitiesByNameRequest() {
  yield takeLatest(`${GET_ACTIVITIES_BY_NAME}_${REQUEST}`, GetActivitiesByName);
}

export function* rootActivitiesSaga() {
  yield spawn(GetActivitiesByNameRequest);
}
