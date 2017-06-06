import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import configureStore from './store/configure-store';
import { AppContainer } from './app';

function buildIntialState(serverState) {
  var initialState = serverState;

  initialState.createProduct = {
    errors: [],
    product: {}
  }

  return initialState
}

const initialState = fromJS(buildIntialState(JSON.parse(document.getElementById('root-element').getAttribute('data-initial-state'))));

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root-element')
);
