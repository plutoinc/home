import React from "react";
import { Route, IndexRoute } from "react-router";
import { trackAndOpenLinkInCurrentTab } from "./helpers/handleGA";
import EnvChecker from "./helpers/envChecker";
// containers
import RootComponent from "./components/root";
import OldHome from "./oldhome";
import Home from "./home";
import NoPage from "./components/404";
import FAQContainer from "./faq";
import ProductContainer from "./product";

export const WHITE_PAPER_ADDRESS =
  "https://assets.pluto.network/Pluto_white_paper_v04_180719_1355_BSH.pdf";

export const PRODUCT_URL = "https://scinapse.io";

export const BLOG_URL = "https://medium.com/pluto-network";

class WhitepaperRedirector extends React.Component {
  componentWillMount() {
    if (!EnvChecker.isServer()) {
      trackAndOpenLinkInCurrentTab(WHITE_PAPER_ADDRESS);
    }
  }

  render() {
    return null;
  }
}

const createRoute = () => [
  <Route path="/whitepaper" component={WhitepaperRedirector} />,
  <Route path="/oldhome" component={RootComponent}>
    <IndexRoute component={OldHome} />
    <Route path="*" component={NoPage} />
  </Route>,
  <Route path="/faq" component={RootComponent}>
    <IndexRoute component={FAQContainer} />
    <Route path="*" component={NoPage} />
  </Route>,
  <Route path="/product" component={RootComponent}>
    <IndexRoute component={ProductContainer} />
    <Route path="*" component={NoPage} />
  </Route>,
  <Route path="/" component={RootComponent}>
    <IndexRoute component={Home} />
    <Route path="*" component={NoPage} />
  </Route>
];

export default createRoute;
