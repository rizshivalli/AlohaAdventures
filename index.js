/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './src/Main';
import {name as appName} from './app.json';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  import('@configs/Reactotron').then(() =>
    console.log('Reactotron Configured'),
  );
  console.log = Reactotron.log;
}

AppRegistry.registerComponent(appName, () => App);
