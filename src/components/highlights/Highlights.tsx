import Icons from '@components/Icons';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

const Highlights = ({item, onPress}) => {
  const {width} = useWindowDimensions();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.touchable, {width: width - 24}]}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.highlightsCardHeading}>{item.title}</Text>
        <Text style={styles.highlightsCardDescription}>{item.description}</Text>
        <View style={styles.rightContent}>
          <View style={styles.rightArrowContainer}>
            <Icons name="RightArrow" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Highlights;

const styles = StyleSheet.create({
  highlightsCardHeading: {
    color: theme.green,
    fontSize: 24,
    fontFamily: fontOptions('700'),
    fontWeight: '600',
    fontStyle: 'normal',
  },
  highlightsCardDescription: {
    color: theme.dark,
    fontSize: 16,
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    fontStyle: 'normal',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  rightArrowContainer: {
    borderRadius: 50,
    backgroundColor: theme.light,
    padding: 16,
  },
  rightContent: {
    alignItems: 'flex-end',
    paddingTop: 8,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  image: {width: '100%', height: 170},
  touchable: {paddingRight: 24},
});
