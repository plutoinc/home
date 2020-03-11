import Immutable from "immutable";
import React from "react";
import ReactDom from "react-dom";
import { applyMiddleware, createStore } from "redux";
import {
  Router,
  createMemoryHistory,
  browserHistory,
  hashHistory
} from "react-router";
import { Provider } from "react-redux";
import ReactGA from "react-ga";
// server
import { handler as lambdaHandler, serverSideRender } from "./server";
import mailHandler from "./mailServer";
// Middleware
import * as ReactRouterRedux from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
// helpers
import EnvChecker from "./helpers/envChecker";
import CssInjector from "./helpers/cssInjector";
// root reducer
import { rootReducer, initialState } from "./rootReducer";
// routes
import createRoute from "./routes";
// i18n
import ConnectedIntlProvider from "./components/connectedIntlProvider";

let history;
if (EnvChecker.isServer()) {
  history = createMemoryHistory();
} else if (EnvChecker.isDev()) {
  require("bootstrap");
  history = hashHistory;
} else {
  require("bootstrap");
  history = browserHistory;
}

const routerMid = ReactRouterRedux.routerMiddleware(history);

let AppInitialState;
if (!EnvChecker.isServer()) {
  try {
    const appInitialState = {};
    const __INITIAL_STATE__ = window.__INITIAL_STATE__;

    for (const k in __INITIAL_STATE__) {
      if (
        __INITIAL_STATE__.hasOwnProperty(k) &&
        Immutable.isImmutable(__INITIAL_STATE__[k])
      ) {
        appInitialState[k] = Immutable.fromJS(__INITIAL_STATE__[k]);
      }
    }
    AppInitialState = appInitialState;
  } catch (err) {
    console.error(err);
    console.warn("There is no initial state from server");
    AppInitialState = initialState;
  }
}

let store;
if (EnvChecker.isServer() || !EnvChecker.isDev()) {
  store = createStore(
    rootReducer,
    AppInitialState,
    applyMiddleware(routerMid, thunkMiddleware)
  );
} else {
  const logger = createLogger({
    stateTransformer: state => {
      const newState = {};
      for (const i of Object.keys(state)) {
        if (Immutable.Iterable.isIterable(state[i])) {
          newState[i] = state[i].toJS();
        } else {
          newState[i] = state[i];
        }
      }
      return newState;
    }
  });

  store = createStore(
    rootReducer,
    AppInitialState,
    applyMiddleware(routerMid, thunkMiddleware, logger)
  );
}

const appHistory = ReactRouterRedux.syncHistoryWithStore(history, store);

export const appStore = store;
const routes = createRoute(store);

if (!EnvChecker.isServer()) {
  function handleLocationUpdate() {
    if (!EnvChecker.isDev()) {
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }

  // initialize GA
  if (!EnvChecker.isDev()) {
    ReactGA.initialize("UA-108144949-1");
    ReactGA.set({ page: window.location.pathname + window.location.search });
  }

  ReactDom.render(
    <CssInjector>
      <Provider store={store}>
        <ConnectedIntlProvider>
          <Router
            history={appHistory}
            children={routes}
            onUpdate={handleLocationUpdate}
          />
        </ConnectedIntlProvider>
      </Provider>
    </CssInjector>,
    document.getElementById("react-app")
  );
} else if (EnvChecker.isServer() && process.env.NODE_ENV === "test") {
  serverSideRender("/", "dsf")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });
}

// Lambda handler
export const handler = lambdaHandler;
