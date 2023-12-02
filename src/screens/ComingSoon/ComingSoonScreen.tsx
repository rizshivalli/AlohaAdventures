import Text from '@components/text';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const ComingSoonScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
      <Text style={styles.description}>
        This feature is under development and will be available soon.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.light, // Set your desired background color
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
    color: theme.dark,
    fontFamily: fontOptions('600'),
    fontStyle: 'normal',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.dark,
  },
});

export default ComingSoonScreen;
