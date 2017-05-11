import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { fromJS } from 'immutable';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="the-app">
        <h1>This is the app right here.</h1>
        <p>This is a p tag</p>
      </div>
    )
  }
}
