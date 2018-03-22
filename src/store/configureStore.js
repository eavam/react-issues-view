import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import fields from '../ducks/fields';
import autocomplite from '../ducks/autocomplite';
import issues from '../ducks/issues';
import issuePage from '../ducks/issuePage';
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
const reducers = combineReducers({
  fields,
  autocomplite,
  issues,
  issuePage,
});

const store = createStore(reducers, composedEnhancers);
sagaMiddleware.run(sagas);

export default store;
