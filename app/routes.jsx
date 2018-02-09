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

export const WHITE_PAPER_ADDRESS =
  "https://assets.pluto.network/Pluto_white_paper_v04_180108_2130_BSH.pdf";

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
  <Route path="/" component={RootComponent}>
    <IndexRoute component={Home} />
    <Route path="*" component={NoPage} />
  </Route>
];

export default createRoute;
