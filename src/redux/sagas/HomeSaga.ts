import {
  CallEffect,
  PutEffect,
  call,
  put,
  spawn,
  takeLatest,
} from 'redux-saga/effects';
import {
  FAIL,
  REQUEST,
  GET_ALL_HIGHLIGHTS,
  SUCCESS,
  GET_ALL_CATEGORIES,
} from '../actions';
import {alohaAppAPI} from '@utils/apiUtils';
import {V1_CATEGORIRES, V1_HIGHLIGHTS} from '../../constants/apiConstants';

export function* GetHighlights({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    // Define the API endpoint. Here, I'm using a placeholder endpoint from jsonplaceholder.

    // Make the API call
    const response = yield call(alohaAppAPI('').get, V1_HIGHLIGHTS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('respsonsse', response.status);

    // Check if the response is successful
    if (response.status === 200) {
      const {data} = response || {};
      console.log('data', data);

      // Dispatch a success action
      yield put({
        type: `${GET_ALL_HIGHLIGHTS}_${SUCCESS}`,
        payload: data,
      });

      // If there's a callback, call it
      if (callback) {
        callback(data);
      }
    } else {
      // If the response is not successful, throw an error
      const errorData = yield response.json();
      throw new Error(errorData.message || 'FAILED TO GET HIGHLIGHTS');
    }
  } catch (error: any) {
    // Dispatch a failure action
    yield put({
      type: `${GET_ALL_HIGHLIGHTS}_${FAIL}`,
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

// write a function to GetCatagories

export function* GetCatagories({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    // Define the API endpoint. Here, I'm using a placeholder endpoint from jsonplaceholder.

    // Make the API call
    const response = yield call(alohaAppAPI('').get, V1_CATEGORIRES, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('respsonsse', response.status);

    // Check if the response is successful
    if (response.status === 200) {
      const {data} = response || {};
      console.log('data', data);

      // Dispatch a success action
      yield put({
        type: `${GET_ALL_CATEGORIES}_${SUCCESS}`,
        payload: data,
      });

      // If there's a callback, call it
      if (callback) {
        callback(data);
      }
    } else {
      // If the response is not successful, throw an error
      const errorData = yield response.json();
      throw new Error(errorData.message || 'FAILED TO GET CATEGORIES');
    }
  } catch (error: any) {
    // Dispatch a failure action
    yield put({
      type: `${GET_ALL_CATEGORIES}_${FAIL}`,
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

function* GetHighlightsRequest() {
  yield takeLatest(`${GET_ALL_HIGHLIGHTS}_${REQUEST}`, GetHighlights);
}

function* GetCatagoriesRequest() {
  yield takeLatest(`${GET_ALL_CATEGORIES}_${REQUEST}`, GetCatagories);
}

export function* rootHomeSaga() {
  yield spawn(GetHighlightsRequest);
  yield spawn(GetCatagoriesRequest);
}
