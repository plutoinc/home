import React from 'react';
import { Route, IndexRoute } from 'react-router';
// containers
import RootComponent from './components/root';
import OldHome from './home';
import Home from './newhome';
import NoPage from './components/404';

const createRoute = () => ([
  <Route path="/oldhome" component={RootComponent}>
    <IndexRoute component={OldHome} />
    <Route path="*" component={NoPage} />
  </Route>,
  <Route path="/" component={RootComponent}>
    <IndexRoute component={Home} />
    <Route path="*" component={NoPage} />
  </Route>,
]);

export default createRoute;
