import Immutable from 'immutable';
import React from 'react';
import ReactDom from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Router, createMemoryHistory, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
// server
import { handler as lambdaHandler } from './server';
// redux middlewares
import * as ReactRouterRedux from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// helpers
import EnvChecker from './helpers/envChecker';
import CssInjector from './helpers/cssInjector';
// root reducer
import { rootReducer, initialState } from './rootReducer';
// routes
import createRoute from './routes';

let history;
if (EnvChecker.isServer()) {
  history = createMemoryHistory();
} else if (EnvChecker.isDev()) {
  history = hashHistory;
} else {
  history = browserHistory;
}

const routerMid = ReactRouterRedux.routerMiddleware(history);

// Create store
let AppInitialState;
if (!EnvChecker.isServer()) {
  try {
    const appInitialState = {};
    const __INITIAL_STATE__ = window.__INITIAL_STATE__;

    for (const k in __INITIAL_STATE__) {
      if (__INITIAL_STATE__.hasOwnProperty(k)) {
        appInitialState[k] = Immutable.fromJS(__INITIAL_STATE__[k]);
      }
    }
    AppInitialState = appInitialState;
  } catch (err) {
    console.error(err);
    console.warn('There is no initial state from server');
    AppInitialState = initialState;
  }
}

let store;
if (EnvChecker.isServer() || !EnvChecker.isDev()) {
  store = createStore(
    rootReducer,
    AppInitialState,
    // TODO: Add InitialState and Define State types to change 'any' type
    applyMiddleware(routerMid, thunkMiddleware),
  );
} else {
  // Set logger middleware to convert from ImmutableJS to plainJS
  const logger = createLogger({
    stateTransformer: (state) => {
      const newState = {}; // HACK: Should assign proper type later
      for (const i of Object.keys(state)) {
        if (Immutable.Iterable.isIterable(state[i])) {
          newState[i] = state[i].toJS();
        } else {
          newState[i] = state[i];
        }
      }
      return newState;
    },
  });

  store = createStore(
    rootReducer,
    AppInitialState,
    applyMiddleware(routerMid, thunkMiddleware, logger),
  );
}

// Create history with store
const appHistory = ReactRouterRedux.syncHistoryWithStore(
  history,
  store,
);

export const appStore = store;
const routes = createRoute(store);

// Browser Side Rendering to develop React Web-app
if (!EnvChecker.isServer()) {
  ReactDom.render(
    <CssInjector>
      <Provider store={store}>
        <Router history={appHistory} children={routes} />
      </Provider>
    </CssInjector>,
    document.getElementById('react-app'),
  );
}

// Lambda handler
export const handler = lambdaHandler;
