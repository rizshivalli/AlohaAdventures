import Text from '@components/text';
import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

interface TopSpotsItemProps {
  name: string;
  image: string;
}

const TopSpotsItem: FC<TopSpotsItemProps> = ({name, image}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.spotText}>{name}</Text>
      <Image
        style={styles.spotImage}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    borderRadius: 8,

    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  spotImage: {
    width: '40%',
    height: '100%',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  spotText: {
    paddingVertical: 16,
    paddingLeft: 16,
    color: theme.green,
    fontFamily: fontOptions('700'),
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 20,
    fontSize: 16,
  },
});
export default TopSpotsItem;
