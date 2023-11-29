import './constants/globalConstants';
import React from 'react';
import Navigation from '@configs/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@utils/NavigationService';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@configs/redux';
import {Provider as ReduxProvider} from 'react-redux';

const Main = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <PersistGate
            loading={<ActivityIndicator size="large" />}
            persistor={persistor}>
            <NavigationContainer onReady={() => {}} ref={navigationRef}>
              {/* Main application navigation */}
              <Navigation />
            </NavigationContainer>
          </PersistGate>
        </ReduxProvider>
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
