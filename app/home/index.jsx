import React from "react";
import Axios from "axios";
import ReactGA from "react-ga";
import throttle from "lodash.throttle";
import { connect } from "react-redux";
import VisibilitySensor from "react-visibility-sensor";
// components
import Header from "../components/header";
import Footer from "../components/newfooter";
import MainSection from "./components/mainSection";

import ProductSection from "./components/productSection";
import PressSection from "./components/pressSection";
import ServiceInfoSection from "./components/serviceInfoSection";

// actions
import { changeEmailInput, leaveScrollTop, enterScrollTop } from "./actions";
// helpers
import EnvChecker from "../helpers/envChecker";
import SolutionSection from "./components/solutionSection";
import TeamInfoSection from "./components/teamInfoSection";
import RepresentSection from "./components/representSection";

function mapStateToProps(appState) {
  return {
    homeState: appState.home
  };
}

class HomeContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mainPassed: false,
      pocPassed: false,
      achievePassed: false,
      productPassed: false,
      problemPassed: false,
      videoPassed: false,
      whatPassed: false,
      visionPassed: false,
      workPassed: false,
      pressPassed: false,
      blogPassed: false
    };

    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.handleScroll = throttle(this.handleScrollEvent, 100);
    this.handleScroll();

    this.handleEmailChange = this.handleEmailChange.bind(this);
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
    const { intl, homeState } = this.props;
    let innerHeight = 768;
    if (!EnvChecker.isServer()) {
    }

    const blogPosts = homeState.get("blogPosts");

    return (
      <section>
        <Header isTop={homeState.get("isTop")} currentCategory={"home"} />

        <VisibilitySensor
          partialVisibility
          minTopValue={300}
          onChange={isVisible => {
            if (isVisible) {
              this.setState({
                mainPassed: true
              });
            }
          }}
        >
          <MainSection shown={this.state.mainPassed} />
        </VisibilitySensor>

        <VisibilitySensor
          partialVisibility
          minTopValue={300}
          onChange={isVisible => {
            if (isVisible) {
              this.setState({
                productPassed: true
              });
            }
          }}
        >
          <ProductSection shown={this.state.productPassed} />
        </VisibilitySensor>
        <ServiceInfoSection />
        <SolutionSection />
        <TeamInfoSection />

        <VisibilitySensor
          partialVisibility
          minTopValue={300}
          onChange={isVisible => {
            if (isVisible) {
              this.setState({
                pressPassed: true
              });
            }
          }}
        >
          <PressSection shown={this.state.pressPassed} />
        </VisibilitySensor>
        <RepresentSection />

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

  handleEmailChange(e) {
    const { dispatch } = this.props;
    dispatch(changeEmailInput(e.currentTarget.value));
  }
}

export default connect(mapStateToProps)(HomeContainer);
