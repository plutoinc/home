import React from "react";
import { connect } from "react-redux";
import throttle from "lodash.throttle";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Header from "../components/header";
import Footer from "../components/newfooter";
import styles from "./aboutUs.scss";
import Icon from "../components/icons";
import EnvChecker from "../helpers/envChecker";
import { enterScrollTop, leaveScrollTop } from "../home/actions";
import PlutoInfo from "./components/plutoInfo";
import WhatWeDo from "./components/whatWeDo";
import InTheFuture from "./components/inTheFuture";
import BackgroundAndWhitePaper from "./components/backgroundAndWhitePaper";

function mapStateToProps(appState) {
  return {
    homeState: appState.home
  };
}

class AboutUs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.handleScroll = throttle(this.handleScrollEvent, 100);
    this.handleScroll();
  }

  componentDidMount() {
    if (!EnvChecker.isServer()) {
      window.addEventListener("scroll", this.handleScroll);
    }
    this.handleScroll();
  }

  componentWillUnmount() {
    if (!EnvChecker.isServer()) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  render() {
    const { homeState } = this.props;

    return (
      <section>
        <Header isTop={homeState.get("isTop")} currentCategory={"aboutUs"} />
        <PlutoInfo />
        <WhatWeDo />
        <InTheFuture />
        <BackgroundAndWhitePaper />
        <Footer />
      </section>
    );
  }

  handleScrollEvent() {
    const { dispatch } = this.props;
    if (!EnvChecker.isServer()) {
      const top =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;

      if (parseInt(top, 10) === 0) {
        dispatch(enterScrollTop());
      } else {
        dispatch(leaveScrollTop());
      }
    }
  }
}

export default connect(mapStateToProps)(withStyles(styles)(AboutUs));
