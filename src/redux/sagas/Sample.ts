import {
  CallEffect,
  PutEffect,
  call,
  put,
  spawn,
  takeLatest,
} from 'redux-saga/effects';
import {FAIL, REQUEST, SAMPLE_POSTS, SUCCESS} from '../actions';

export function* GetSamplePosts({
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
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';

    // Make the API call
    const response = yield call(fetch, endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload), // Assuming payload contains the data you want to send
    });

    // Check if the response is successful
    if (response.ok) {
      const data = yield response.json();

      // Dispatch a success action
      yield put({
        type: `${SAMPLE_POSTS}_${SUCCESS}`,
        payload: data,
      });

      // If there's a callback, call it
      if (callback) {
        callback(null, data);
      }
    } else {
      // If the response is not successful, throw an error
      const errorData = yield response.json();
      throw new Error(errorData.message || 'Failed to send OTP');
    }
  } catch (error: any) {
    // Dispatch a failure action
    yield put({
      type: `${SAMPLE_POSTS}_${FAIL}`,
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

function* GetSamplePostsRequest() {
  yield takeLatest(`${SAMPLE_POSTS}_${REQUEST}`, GetSamplePosts);
}

export function* rootSampleSaga() {
  yield spawn(GetSamplePostsRequest);
}
