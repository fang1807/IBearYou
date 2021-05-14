/**
 * @format
 */

import {AppRegistry} from 'react-native';
import test from './testpage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => test);
