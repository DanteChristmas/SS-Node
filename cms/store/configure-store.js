import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware, { END } from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

import rootReducer from '../reducers/root-reducer';
import rootSaga from '../sagas/root-saga';

function configureStoreProd(initialState) {
  const middlewares = [
    sagaMiddleware
  ];

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  store.runSaga(rootSaga);

  return store;
}

function configureStoreDev(initialState) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    sagaMiddleware
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  store.runSaga(rootSaga);

  console.log(store.getState());

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
