import React from "react";
// components
import { connect } from "react-redux";
import throttle from "lodash.throttle";
import EnvChecker from "../helpers/envChecker";
import Header from "../components/header";
import Footer from "../components/newfooter";
import KeyInfoSection from "./component/keyInfoSection";
import ChartInfoSection from "./component/chartInfoSection";
import ScinapseFeatureInfoSection from "./component/scinapseFeatureInfoSection";
import DesignedForResearcherSection from "./component/designedForResearcherSection";
import RepresentSection from "../home/components/representSection";
import MobileDesignedForResearcherSection from "./component/mobileDesignedForResearcherSection";
import { enterScrollTop, leaveScrollTop } from "../home/actions";

function mapStateToProps(appState) {
  return {
    homeState: appState.home
  };
}

class ProductContainer extends React.PureComponent {
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
        <Header isTop={homeState.get("isTop")} currentCategory={"product"} />
        <KeyInfoSection />
        <ChartInfoSection />
        <ScinapseFeatureInfoSection />
        <DesignedForResearcherSection />
        <MobileDesignedForResearcherSection />
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
}

export default connect(mapStateToProps)(ProductContainer);
