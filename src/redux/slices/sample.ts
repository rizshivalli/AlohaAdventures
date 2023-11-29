import {createSlice} from '@reduxjs/toolkit';

import {SAMPLE_POSTS, SUCCESS} from '../actions';

export interface SampleStateType {
  posts?: Array<any>;
}

export const initialSampleState: SampleStateType = {
  posts: [],
};

export const sampleSlice = createSlice({
  name: 'sample',
  initialState: initialSampleState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === `${SAMPLE_POSTS}_${SUCCESS}`,
      (state, action) => {
        const {payload} = action;
        return {
          ...state,
          posts: payload,
        };
      },
    );
  },
});

export default sampleSlice.reducer;
