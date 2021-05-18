/**
 * @format
 */

import {AppRegistry} from 'react-native';
import welcome from './welcome';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => welcome);
