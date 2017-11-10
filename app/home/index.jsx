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
// import VideoSection from "./components/videoSection";
import ProblemSection from "./components/problemSection";
import AchieveSection from "./components/achieveSection";
import WorkSection from "./components/workSection";
import DetailSection from "./components/detailSection";
import MailingSection from "./components/mailingSection";
// actions
import { changeEmailInput, leaveScrollTop, enterScrollTop } from "./actions";
// helpers
import EnvChecker from "../helpers/envChecker";

function mapStateToProps(appState) {
  return {
    homeState: appState.home,
  };
}

class HomeContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mainPassed: false,
      problemPassed: false,
      achievePassed: false,
      workPassed: false,
      detailPassed: false,
    };

    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.handleScroll = throttle(this.handleScrollEvent, 100);
    this.handleScroll();

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.subscribeEmail = this.subscribeEmail.bind(this);
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

    return (
      <section>
        <Header isTop={homeState.get("isTop")} />

        <VisibilitySensor
          partialVisibility
          minTopValue={300}
          onChange={isVisible => {
            if (isVisible) {
              this.setState({
                mainPassed: true,
              });
            }
          }}
        >
          <MainSection
            email={homeState.get("email")}
            handleEmailChange={this.handleEmailChange}
            subscribeEmail={this.subscribeEmail}
            shown={this.state.mainPassed}
          />
        </VisibilitySensor>

        <VisibilitySensor
          partialVisibility
          minTopValue={300}
          onChange={isVisible => {
            if (isVisible) {
              this.setState({
                problemPassed: true,
              });
            }
          }}
        >
          <ProblemSection shown={this.state.problemPassed} />
        </VisibilitySensor>

        <VisibilitySensor
          partialVisibility
          minTopValue={300}
          onChange={isVisible => {
            if (isVisible) {
              this.setState({
                achievePassed: true,
              });
            }
          }}
        >
          <AchieveSection shown={this.state.achievePassed} />
        </VisibilitySensor>

        <VisibilitySensor
          partialVisibility
          minTopValue={300}
          onChange={isVisible => {
            if (isVisible) {
              this.setState({
                workPassed: true,
              });
            }
          }}
        >
          <WorkSection shown={this.state.workPassed} />
        </VisibilitySensor>

        <VisibilitySensor
          partialVisibility
          minTopValue={300}
          onChange={isVisible => {
            if (isVisible) {
              this.setState({
                detailPassed: true,
              });
            }
          }}
        >
          <DetailSection shown={this.state.detailPassed} />
        </VisibilitySensor>

        <MailingSection
          email={homeState.get("email")}
          handleEmailChange={this.handleEmailChange}
          subscribeEmail={this.subscribeEmail}
        />

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
        dispatch(leaveScrollTop());
      }
    }
  }

  handleEmailChange(e) {
    const { dispatch } = this.props;
    dispatch(changeEmailInput(e.currentTarget.value));
  }

  async subscribeEmail(e, from) {
    const { homeState, dispatch } = this.props;
    e.preventDefault();
    const emailInput = homeState.get("email");
    // e-mail validation by regular expression
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(emailInput)) {
      alert("Please input valid e-mail");
    } else {
      try {
        await Axios.post(
          `https://gesqspxc8i.execute-api.us-east-1.amazonaws.com/prod/subscribeMailingList?email=${emailInput}`,
        );

        ReactGA.event({
          category: "subscribe",
          action: `subscribe-from-${from}`,
          label: "subscribe-email",
        });

        alert("You are on the subscribe list now");
        dispatch(changeEmailInput(""));
      } catch (err) {
        alert(`Failed: ${err.response.data.error}`);
      }
    }
  }
}

export default connect(mapStateToProps)(HomeContainer);
