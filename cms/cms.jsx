import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { fromJS } from 'immutable';


import App from './app';

let initialState = fromJS(JSON.parse(document.getElementById('root-element').getAttribute('data-initial-state')));
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));
store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);
store.runSaga(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root-element')
);
