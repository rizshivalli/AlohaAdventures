import {createSlice} from '@reduxjs/toolkit';

export interface LoadingStateType {
  [key: string]: boolean;
}

export const initialLoadingState: LoadingStateType = {};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: initialLoadingState,
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
        if (requestState === 'REQUEST') {
          return {...state, [requestName]: true};
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {[requestName]: prevLoadingState, ...rest} = state;
        return rest;
      },
    );
  },
});

export default loadingSlice.reducer;
