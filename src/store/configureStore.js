'use strict';

import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';

import analytics from './analytics'
import reducers from '../reducers'

import createLogger from 'redux-logger'
import { AsyncStorage } from 'react-native'


let isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

let logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

let beetStore = applyMiddleware(thunk, analytics, logger)(createStore);

function configureStore(onComplete: ?() => void) {
  const store = autoRehydrate()(beetStore)(reducers);
  persistStore(store, {storage: AsyncStorage}, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

export default configureStore;