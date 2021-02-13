/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Reducer} from './src/redux/reducer';
import {AppNavigator} from './src/router';
import thunk from 'redux-thunk';

// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// eslint-disable-next-line no-unused-vars
const logger = (store) => (next) => (action) => {
  const result = next(action);
  return result;
};

const store = createStore(
  Reducer.reducer,
  composeEnhancers(applyMiddleware(logger, thunk)),
);

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  );
};

export default App;
