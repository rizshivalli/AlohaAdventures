# Text Component Usage Guide

The `Text` component is a customizable text component for React Native applications. It extends the default `Text` component from `react-native` to include additional props for more granular control over the text styling.

## Props

Here are the props that you can use to customize the `Text` component:

### `variant`

Defines the text variant to use. It accepts one of the following values:

- `'h1'` to `'h6'`: Different header levels with predefined styles.
- `'subtitle1'`, `'subtitle2'`: Subtitle styles.
- `'body1'`, `'body2'`: Body text styles.
- `'button'`: Button text style.
- `'caption'`: Caption text style.
- `'overline'`: Overline text style.
- `'error'`, `'inlineError'`: Error text styles.
- `'label'`: Label text style.

### `fontWeight`

Defines the weight of the font. It accepts one of the following values:

- `'normal'`
- `'bold'`
- `'100'` to `'900'`

### `align`

Defines the text alignment. It accepts one of the following values:

- `'auto'`
- `'left'`
- `'right'`
- `'center'`
- `'justify'`

### `color`

Defines the text color. It should be one of the keys from your `ColorPaletteKeys`.

### `size`

Defines the font size. It accepts a `number`.

### `maxWidth`

Defines the maximum width of the text component. It accepts a `number`.

### `style`

Defines the style of the text component. It accepts a `StyleProp<TextStyle>`.

## Usage

Here is how you can use the `Text` component in your React Native application:

```jsx
import React from 'react';
import Text from '@components/text';

const MyApp = () => {
  return (
    <Text variant="h1" color="primary" align="center">
      Hello World
    </Text>
  );
};

export default MyApp;
```
