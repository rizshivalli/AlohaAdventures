import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import mmkvPlugin from 'reactotron-react-native-mmkv';
import {storage} from '@configs/mmkv';
import {NativeModules} from 'react-native';

let scriptHostname: string;

const scriptURL = NativeModules.SourceCode.scriptURL;
scriptHostname = scriptURL.split('://')[1].split(':')[0];
const reactotron = Reactotron.configure({host: scriptHostname}) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from // controls connection & communication settings
  .use(mmkvPlugin({storage})) // <--- here we go!
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux()) //  <- redux
  .use(sagaPlugin({except: ['']})) // <-- redux saga
  .connect(); // let's connect!
// @ts-ignore
reactotron?.clear();
export default reactotron;
