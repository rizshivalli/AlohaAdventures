import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import CustomBottomTabBar from '@components/CustomBottomTabBar';
import {RootStackParamList} from 'types/RootStackParams';
import Header from '@components/header';

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
        tabBarStyle: [{display: 'flex'}, null],
        header: MainHeader,
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
