import React from "react";
import Axios from "axios";
import throttle from "lodash.throttle";
import { connect } from "react-redux";
// components
import Header from "../components/header";
import Footer from "../components/newfooter";
import MainSection from "./components/mainSection";
import VideoSection from "./components/videoSection";
import ProblemSection from "./components/problemSection";
import AchieveSection from "./components/achieveSection";
import WorkSection from "./components/workSection";
import DetailSection from "./components/detailSection";
import MailingSection from "./components/mailingSection";
// actions
import { leaveScrollTop, enterScrollTop } from "./actions";
// helpers
import EnvChecker from "../helpers/envChecker";

function mapStateToProps(appState) {
  return {
    homeState: appState.newhome,
  };
}

class NewHomeContainer extends React.PureComponent {
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
  }

  componentWillUnmount() {
    if (!EnvChecker.isServer()) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  render() {
    const { intl, homeState } = this.props;
    return (
      <section>
        <Header isTop={homeState.get("isTop")} />
        <MainSection />
        <ProblemSection />
        <AchieveSection />
        <WorkSection />
        <DetailSection />
        <MailingSection />
        <Footer />
      </section>
    );
  }

  handleScrollEvent() {
    const { dispatch } = this.props;
    if (!EnvChecker.isServer()) {
      const mainHeight = window.innerWidth > 768 ? 800 : 568;
      const top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      if (parseInt(top, 10) < mainHeight) {
        dispatch(enterScrollTop());
      } else {
        console.log("leaved");
        dispatch(leaveScrollTop());
      }
    }
  }
}

export default connect(mapStateToProps)(NewHomeContainer);
