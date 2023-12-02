import ActivitiesScreen from './ActivitiesScreen';

import {GET_ACTIVITIES_BY_NAME, REQUEST} from '@actions/index';

import {connect, ConnectedProps} from 'react-redux';
import type {Dispatch} from 'redux';
import {HomeStateType} from '@slices/homeSlice';
import {LoadingStateType} from '@slices/loading';

interface StateProps {
  loading: LoadingStateType;
  home: HomeStateType;
}

interface DispatchProps {
  requestActivitysData: {
    payload: {
      activityName: 'Surfing' | 'Traditional Festivals' | 'Volcanoes';
    };
    callback: (payload?: any) => void;
  };
  requestCatagoriesData: {
    payload?: {};
    callback?: (payload?: any) => void;
  };
}

const mapStateToProps = (state: StateProps) => {
  const {loading} = state;
  const {GET_ACTIVITIES_BY_NAME: activityLoading} = loading || {};

  return {
    activityLoading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  const getActivitiesByName = ({
    payload,
    callback,
  }: DispatchProps['requestActivitysData']) => {
    return dispatch({
      type: `${GET_ACTIVITIES_BY_NAME}_${REQUEST}`,
      payload,
      callback,
    });
  };

  return {
    getActivitiesByName,
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ActivitiesScreen);
