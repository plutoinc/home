import React from 'react';
import { Route, IndexRoute } from 'react-router';
// containers
import RootComponent from './components/root';
import Home from './home';
import NoPage from './components/404';

const createRoute = () => ([
  <Route path="/" component={RootComponent}>
    <IndexRoute component={Home} />
    <Route path="*" component={NoPage} />
  </Route>,
]);

export default createRoute;