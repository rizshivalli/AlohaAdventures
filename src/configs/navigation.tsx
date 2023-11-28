import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import CustomBottomTabBar from '@components/CustomBottomTabBar';
import {RootStackParamList} from 'types/RootStackParams';

const Tab = createBottomTabNavigator();

const MainStack = createStackNavigator<RootStackParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [{display: 'flex'}, null],
      }}
      initialRouteName={'Home'}
      tabBar={CustomBottomTabBar}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Home',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Records"
        options={{
          tabBarLabel: 'Records',
          unmountOnBlur: true,
        }}
        component={HomeScreen}
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
    </MainStack.Navigator>
  );
};

export default Navigation;
