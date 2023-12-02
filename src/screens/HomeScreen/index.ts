import {GET_ALL_CATEGORIES, GET_ALL_HIGHLIGHTS, REQUEST} from '@actions/index';
import HomeScreen from './HomeScreen';
import {connect, ConnectedProps} from 'react-redux';
import type {Dispatch} from 'redux';
import {HomeStateType} from '@slices/homeSlice';
import {LoadingStateType} from '@slices/loading';

interface StateProps {
  loading: LoadingStateType;
  home: HomeStateType;
}

interface DispatchProps {
  requestHighlightsData: {
    payload?: {};
    callback?: (payload?: any) => void;
  };
  requestCatagoriesData: {
    payload?: {};
    callback?: (payload?: any) => void;
  };
}

const mapStateToProps = (state: StateProps) => {
  const {loading, home} = state;
  const {
    GET_ALL_HIGHLIGHTS: highlightsLoading,
    GET_ALL_CATEGORIES: catagoriesLoading,
  } = loading || {};
  const {highlights, catagories} = home || {};

  return {
    highlightsLoading,
    highlights,
    catagoriesLoading,
    catagories,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const requestHighlights = ({
    payload = {},
    callback,
  }: DispatchProps['requestHighlightsData']) => {
    return dispatch({
      type: `${GET_ALL_HIGHLIGHTS}_${REQUEST}`,
      payload,
      callback,
    });
  };

  const requestCategories = ({
    payload = {},
    callback,
  }: DispatchProps['requestCatagoriesData']) => {
    return dispatch({
      type: `${GET_ALL_CATEGORIES}_${REQUEST}`,
      payload,
      callback,
    });
  };

  return {
    requestHighlights,
    requestCategories,
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HomeScreen);
