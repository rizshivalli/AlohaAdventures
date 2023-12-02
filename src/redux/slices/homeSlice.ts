import {createSlice} from '@reduxjs/toolkit';

import {GET_ALL_CATEGORIES, GET_ALL_HIGHLIGHTS, SUCCESS} from '../actions';

interface Adventure {
  name: string;
  activities: Array<{
    title: string;
  }>;
}

interface Highlights {
  title: 'Surfing' | 'Traditional Festivals' | 'Volcanoes';
  description: string;
  image: string;
}

export interface HomeStateType {
  highlights?: Array<Highlights>;
  catagories?: Array<Adventure>;
}

export const initialHomeState: HomeStateType = {
  highlights: [],
  catagories: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialHomeState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type === `${GET_ALL_HIGHLIGHTS}_${SUCCESS}`,
      (state, action) => {
        const {payload} = action;
        return {
          ...state,
          highlights: payload,
        };
      },
    );
    builder.addMatcher(
      action => action.type === `${GET_ALL_CATEGORIES}_${SUCCESS}`,
      (state, action) => {
        const {payload} = action;
        return {
          ...state,
          catagories: payload,
        };
      },
    );
  },
});

export default homeSlice.reducer;
