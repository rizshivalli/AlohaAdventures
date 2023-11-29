// Implementation of fontOptions
global.fontOptions = (fontWeight: string): string => {
  switch (fontWeight) {
    case '100':
    case 'thin':
      return 'IBMPlexMono-Thin';
    case '200':
    case 'extralight':
      return 'IBMPlexMono-ExtraLight';
    case '300':
    case 'light':
      return 'IBMPlexMono-Light';
    case '400':
    case 'normal':
      return 'IBMPlexMono-Regular';
    case '500':
    case 'medium':
    case '600':
    case 'semibold':
      return 'IBMPlexMono-SemiBold';
    case '700':
    case 'bold':
    case '800':
    case 'extrabold':
      return 'IBMPlexMono-Bold';
    case '900':
      return 'IBMPlexMono-Regular';
    default:
      return 'IBMPlexMono-Regular'; // Default case added for safety
  }
};

// Initialize the theme
global.theme = {
  green: '#008080',
  dark: '#001a1a',
  light: '#e6f2f2',
  white: '#ffffff',
};

// Initialize fontWeights
global.fontWeights = {
  regular: 'regular',
  semiBold: 'semi-bold',
  bold: 'bold',
  bolder: 'bolder',
  boldest: 'boldest',
  light: 'light',
};

// Initialize _notify_global
global._notify_global = null;
