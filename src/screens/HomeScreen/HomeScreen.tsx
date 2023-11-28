import Header from '@components/header';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      {/* <Text style={styles.text}>Home Screen</Text> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: fontOptions('400'),
    color: theme.dark,
  },
});
