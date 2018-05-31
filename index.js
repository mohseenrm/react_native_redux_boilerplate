import App from './App';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducers from './src/reducers';

const store = createStore(reducers);

const AppContainer = () =>
  <Provider store={store}>
    <App />
  </Provider>

AppRegistry.registerComponent('test', () => AppContainer);
