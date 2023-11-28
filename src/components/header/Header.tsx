import Icons from '@components/Icons';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Icons name="Aloha" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
});
export default Header;
