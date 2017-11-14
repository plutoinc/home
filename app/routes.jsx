import React from "react";
import { Route, IndexRoute } from "react-router";
// containers
import RootComponent from "./components/root";
import OldHome from "./oldhome";
import Home from "./home";
import NoPage from "./components/404";
import FAQContainer from "./faq";

const createRoute = () => [
  <Route path="/oldhome" component={RootComponent}>
    <IndexRoute component={OldHome} />
    <Route path="*" component={NoPage} />
  </Route>,
  <Route path="/faq" component={RootComponent}>
    <IndexRoute component={FAQContainer} />
    <Route path="*" component={NoPage} />
  </Route>,
  <Route path="/" component={RootComponent}>
    <IndexRoute component={Home} />
    <Route path="*" component={NoPage} />
  </Route>,
];

export default createRoute;
