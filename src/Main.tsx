import React from 'react';
import Navigation from './configs/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@utils/NavigationService';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

const Main = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <NavigationContainer onReady={() => {}} ref={navigationRef}>
          {/* Main application navigation */}
          <Navigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
