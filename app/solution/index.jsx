import React from "react";
// components
import { connect } from "react-redux";
import throttle from "lodash.throttle";
import Header from "../components/header";
import Footer from "../components/newfooter";
import ScinapseForInstitutionSection from "./components/scinapseForInstitutionSection";
import ProblemSection from "./components/problemSection";
import HowToPlutoSolveSection from "./components/howToPlutoSolveSection";
import SolutionInfoSection from "./components/solutionInfoSection";
import CompareChartSection from "./components/compareChartSection";
import OtherNotableFeatureSection from "./components/otherNotableFeatureSection";
import TryScinapseSection from "./components/tryScinapseSection";
import { enterScrollTop, leaveScrollTop } from "../home/actions";
import EnvChecker from "../helpers/envChecker";

function mapStateToProps(appState) {
  return {
    homeState: appState.home
  };
}

class SolutionContainer extends React.PureComponent {
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
        <Header isTop={homeState.get("isTop")} currentCategory={"solution"} />
        <ScinapseForInstitutionSection />
        <ProblemSection />
        <HowToPlutoSolveSection />
        <SolutionInfoSection />
        <CompareChartSection />
        <OtherNotableFeatureSection />
        <TryScinapseSection />
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

export default connect(mapStateToProps)(SolutionContainer);
