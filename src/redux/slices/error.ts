import {createSlice} from '@reduxjs/toolkit';

export interface ErrorStateType {
  [key: string]: string | Error;
}

export const initialErrorState: ErrorStateType = {};

export const errorSlice = createSlice({
  name: 'error',
  initialState: initialErrorState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      action =>
        action.type.endsWith('REQUEST') ||
        action.type.endsWith('SUCCESS') ||
        action.type.endsWith('FAIL'),
      (state, action) => {
        const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(action.type);
        if (!matches) {
          return state;
        }
        const [, requestName, requestState] = matches;
        if (requestState === 'FAIL') {
          const {message, data, error: apiError} = action.payload || {};
          return {
            ...state,
            [requestName]: apiError || message || data || '',
          };
        } else if (requestState === 'SUCCESS') {
          return {
            ...state,
            [requestName]: '',
          };
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {[requestName]: prevErrorState, ...rest} = state;
        return rest;
      },
    );
  },
});

export default errorSlice.reducer;
