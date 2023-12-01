import React, {FC} from 'react';
import {Image, StyleSheet} from 'react-native';

interface AvatarProps {
  uri: string;
}
const Avatar: FC<AvatarProps> = ({uri}) => {
  return (
    <Image
      style={styles.avatar}
      source={{
        uri: uri,
      }}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {width: 74, height: 74, borderRadius: 100},
});
