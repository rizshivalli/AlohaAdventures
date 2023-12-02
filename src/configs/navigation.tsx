import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createStackNavigator} from '@react-navigation/stack';
import CustomBottomTabBar from '@components/CustomBottomTabBar';
import {RootStackParamList} from 'types/RootStackParams';
import Header from '@components/header';
import SurfingHome from '@screens/SurfingHome/SurfingHome';
import HomeScreen from '@screens/HomeScreen';
import ActivitiesScreen from '@screens/ActivitiesScreen';
import ComingSoonScreen from '@screens/ComingSoon';

const Tab = createBottomTabNavigator();

const MainStack = createStackNavigator<RootStackParamList>();

const MainHeader = () => {
  return <Header />;
};
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: [{display: 'flex', height: 72}, null],
        header: MainHeader,
      }}
      tabBar={CustomBottomTabBar}
      initialRouteName={'Home'}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Home',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Surfing"
        options={{
          tabBarLabel: 'Surfing',
          unmountOnBlur: true,
        }}
        component={SurfingHome}
      />
      <Tab.Screen
        name="Hula"
        options={{
          tabBarLabel: 'Hula',
          unmountOnBlur: true,
        }}
        component={ComingSoonScreen}
      />
      <Tab.Screen
        name="Vulcano"
        options={{
          tabBarLabel: 'Vulcano',
          unmountOnBlur: true,
        }}
        component={ComingSoonScreen}
      />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <MainStack.Navigator detachInactiveScreens={false}>
      <MainStack.Screen
        name="BottomNavigator"
        component={BottomTabs}
        options={{
          headerShown: false, // Hide the header for this screen
          animationTypeForReplace: 'push', // Specify the animation type when replacing this screen
        }}
      />
      <MainStack.Screen
        name="ActivitiesScreen"
        component={ActivitiesScreen}
        options={{
          headerShown: false, // Hide the header for this screen
          animationTypeForReplace: 'push', // Specify the animation type when replacing this screen
        }}
      />
    </MainStack.Navigator>
  );
};

export default Navigation;
