import React, {ReactNode} from 'react';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, View, StyleSheet} from 'react-native';

interface SafeViewProps {
  style?: object;
  children?: ReactNode;
  edges?: Edges | undefined;
  statusBarColor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SafeView: React.FC<SafeViewProps> = ({
  style,
  children,
  edges = ['top', 'left', 'right'],
  statusBarColor = theme.dark,
  barStyle = 'dark-content',
}) => {
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: statusBarColor}]}
      edges={edges}>
      <StatusBar barStyle={barStyle} backgroundColor={theme.white} />
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default SafeView;
