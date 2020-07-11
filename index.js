/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';

import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './src/routes.js';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
