import {combineReducers} from '@reduxjs/toolkit';

import errorReducer, {initialErrorState} from '@slices/error';
import loadingReducer, {initialLoadingState} from '@slices/loading';

import {LOG_OUT} from 'redux/actions';

const appReducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
});

export const GlobalInitialState = {
  loading: initialLoadingState || {},
  error: initialErrorState || {},
};

const rootReducer: typeof appReducer = (state, action) => {
  if (action.type === `${LOG_OUT}`) {
    // const prevState = state;
    state = GlobalInitialState;
    const {payload} = action || {};
    const {isLogout = true} = payload || {};
    if (isLogout) {
      state = undefined;
      return appReducer(state, action);
    } else {
      return appReducer(state, action);
    }
  }
  return appReducer(state, action);
};

export default rootReducer;
