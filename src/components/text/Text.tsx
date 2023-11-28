import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import type {TextProps, StyleProp, TextStyle} from 'react-native';

export interface Props extends TextProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h5alt'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'button'
    | 'caption'
    | 'overline'
    | 'error'
    | 'inlineError'
    | 'label'
    | 'smallLabel';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: keyof typeof theme;
  size?: number;
  maxWidth?: number;
  style?: StyleProp<TextStyle>;
}

const Text: React.FC<Props> = ({
  variant = 'body1',
  color = theme.dark,
  align,
  size = 16,
  fontWeight,
  maxWidth,
  style,
  ...props
}) => {
  return (
    <RNText
      style={[
        ...(variant?.length ? [styles[variant]] : []),
        ...(color?.length ? [{color: color}] : []),
        ...(align?.length ? [{textAlign: align}] : []),
        ...(maxWidth ? [{maxWidth}] : []),
        ...(size ? [{fontSize: size}] : []),
        ...(fontWeight?.length
          ? [{fontWeight, fontFamily: fontOptions(fontWeight)}]
          : []),
        ...(style ? [style] : []),
      ]}
      allowFontScaling={false}
      {...props}
    />
  );
};

export default Text;

const styles = StyleSheet.create({
  h1: {
    fontFamily: fontOptions('bold'),
    fontWeight: 'bold',
    letterSpacing: 0.8,
    fontSize: 32,
  },
  h2: {
    fontFamily: fontOptions('bold'),
    fontWeight: 'bold',
    letterSpacing: 0.8,
    fontSize: 28,
  },
  h3: {
    fontFamily: fontOptions('bold'),
    fontWeight: 'bold',
    letterSpacing: 0.7,
    fontSize: 24,
  },
  h4: {
    fontFamily: fontOptions('bold'),
    fontWeight: 'bold',
    letterSpacing: 0.7,
    fontSize: 20,
  },
  h5: {
    fontFamily: fontOptions('bold'),
    fontWeight: 'bold',
    letterSpacing: 0.6,
    fontSize: 16,
  },
  h5alt: {
    fontFamily: fontOptions('800'),
    fontWeight: '800',
    letterSpacing: 0.6,
    fontSize: 16,
  },
  h6: {
    fontFamily: fontOptions('bold'),
    fontWeight: 'bold',
    letterSpacing: 0.6,
    fontSize: 14,
  },
  subtitle1: {
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    letterSpacing: 0.5,
    fontSize: 20,
  },
  subtitle2: {
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    letterSpacing: 0.5,
    fontSize: 16,
  },
  body1: {
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    fontSize: 16,
  },
  body2: {
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    fontSize: 14,
  },
  body3: {
    fontFamily: fontOptions('500'),
    fontWeight: '500',
    fontSize: 14,
  },
  button: {
    fontFamily: fontOptions('500'),
    fontWeight: '500',
    fontSize: 16,
  },
  caption: {
    fontFamily: fontOptions('300'),
    fontWeight: '300',
    fontSize: 14,
  },
  overline: {
    fontFamily: fontOptions('300'),
    fontWeight: '300',
    fontSize: 14,
  },
  error: {
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    fontSize: 16,
    color: 'darkred',
  },
  inlineError: {
    fontFamily: fontOptions('400'),
    fontWeight: '400',
    fontSize: 14,
    color: 'darkred',
  },
  label: {
    fontFamily: fontOptions('500'),
    fontWeight: '500',
    fontSize: 16,
  },
  smallLabel: {
    fontFamily: fontOptions('500'),
    fontWeight: '500',
    fontSize: 12,
  },
});
