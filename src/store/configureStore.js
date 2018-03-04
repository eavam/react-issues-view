import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import fields from '../ducks/fields';
import autocomplite from '../ducks/autocomplite';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];
const enhancers = [];

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware];
}

if (process.env.NODE_ENV === 'development') {
  const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const reducers = combineReducers({ rootReducer, fields, autocomplite });

const store = createStore(reducers, composedEnhancers);
sagaMiddleware.run(sagas);

export default store;
