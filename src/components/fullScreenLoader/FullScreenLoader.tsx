import Icons from '@components/Icons';
import Text from '@components/text/Text';
import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface FullScreenLoaderProps {
  message?: string;
}

const FullScreenLoader: FC<FullScreenLoaderProps> = ({message = ''}) => {
  return (
    <View style={styles.loadingContainer}>
      <Icons name="Aloha" />
      <ActivityIndicator size="large" />
      {message && <Text style={styles.loadingMessage}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.light,
  },
  loadingMessage: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    fontFamily: fontOptions('400'),
    fontStyle: 'normal',
    color: theme.dark,
    textAlign: 'center',
  },
});

export default FullScreenLoader;
