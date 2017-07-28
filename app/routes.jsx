import React from 'react';
import { Route } from 'react-router';
// containers
import RootComponent from './components/root';

const createRoute = () => ([
  <Route path="/" component={RootComponent} />,
]);

export default createRoute;
