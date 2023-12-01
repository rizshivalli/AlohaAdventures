import Text from '@components/text';
import React, {FC} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

interface ButtonProps {
  variant: 'Filled' | 'Outline';
  title: string;
  onPress?: () => void;
}
const Button: FC<ButtonProps> = ({title, variant = 'Filled', onPress}) => {
  return (
    <TouchableOpacity style={styles[`button${variant}`]} onPress={onPress}>
      <Text style={styles[`button${variant}Text`]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonOutline: {
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: theme.green,
    borderRadius: 8,
  },
  buttonOutlineText: {
    textAlign: 'center',
    color: theme.green,
    fontSize: 16,
    fontFamily: fontOptions('700'),
    fontStyle: 'normal',
    lineHeight: 20,
  },
  buttonFilled: {
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: theme.green,
    borderRadius: 8,
  },
  buttonFilledText: {
    textAlign: 'center',
    color: theme.white,
    fontSize: 16,
    fontFamily: fontOptions('700'),
    fontStyle: 'normal',
    lineHeight: 20,
  },
});

export default Button;
