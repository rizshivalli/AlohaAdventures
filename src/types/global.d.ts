// globals.d.ts
declare global {
  var fontOptions: (fontWeight: string) => string;
  var theme: Theme;
  var fontWeights: FontWeights;
  var _notify_global: any; // Replace 'any' with a more specific type if possible
}

interface Theme {
  bg: '#FFF';
  dark: '#001A1A';
}

interface FontWeights {
  regular: string;
  semiBold: string;
  bold: string;
  bolder: string;
  boldest: string;
  light: string;
}
declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.ttf';

// You still need to export something to make this a module
export {};
