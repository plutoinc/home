import React from "react";
import { Route, IndexRoute } from "react-router";
// containers
import RootComponent from "./components/root";
import Home from "./home";
import NoPage from "./components/404";
import FAQContainer from "./faq";
import ProductContainer from "./product";
import SolutionContainer from "./solution";
import ContactContainer from "./contact";
import AboutUsContainer from "./aboutUs";

export const WHITE_PAPER_ADDRESS =
  "https://assets.pluto.network/Pluto_white_paper_v04_180719_1355_BSH.pdf";

export const PRODUCT_URL = "https://scinapse.io";

export const BLOG_URL = "https://medium.com/pluto-network";

const createRoute = () => [
  <Route path="/faq" component={RootComponent}>
    <IndexRoute component={FAQContainer} />
    <Route path="*" component={NoPage} />
  </Route>,
  <Route path="/product" component={RootComponent}>
    <IndexRoute component={ProductContainer} />
    <Route path="*" component={NoPage} />
  </Route>,
  <Route path="/solution" component={RootComponent}>
    <IndexRoute component={SolutionContainer} />
    <Route path="*" component={NoPage} />
  </Route>,
  <Route path="/contact" component={RootComponent}>
    <IndexRoute component={ContactContainer} />
    <Route path="*" component={NoPage} />
  </Route>,
  <Route path="/aboutUs" component={RootComponent}>
    <IndexRoute component={AboutUsContainer} />
    <Route path="*" component={NoPage} />
  </Route>,
  <Route path="/" component={RootComponent}>
    <IndexRoute component={Home} />
    <Route path="*" component={NoPage} />
  </Route>
];

export default createRoute;
