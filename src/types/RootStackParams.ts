import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type BottomTabParamList = {
  Home?: {from?: string; action?: string};
  Records?: {from?: string};
};

export type RootStackParamList = {
  BottomNavigator?: NavigatorScreenParams<BottomTabParamList>;
  Home?: {};
};
// All Bottom Tab Navigations
export interface AppBottomTabNavigationProp<
  RouteName extends keyof BottomTabParamList,
> {
  navigation?: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList, RouteName>,
    StackNavigationProp<RootStackParamList>
  >;
  route?: RouteProp<BottomTabParamList, RouteName>;
}

// All Stack Navigations
export interface AppStackNavigationProp<
  RouteName extends keyof RootStackParamList,
> {
  navigation?: CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, RouteName>,
    BottomTabNavigationProp<BottomTabParamList>
  >;
  route?: RouteProp<RootStackParamList, RouteName>;
}

export type StackNavigation = StackNavigationProp<RootStackParamList>;
