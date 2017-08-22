import React from "react";
import Axios from "axios";
import throttle from "lodash.throttle";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
// components
import MainSection from "./components/mainSection";
import Navbar from "../components/navbar";
import ScholarCarousel from "./components/scholarCarousel";
import CriticismSection from "./components/criticismSection";
import PlatformSection from "./components/platformSection";
import RoadMapSection from "./components/roadMapSection";
import ResearchSection from "./components/researchSection";
import BlogSection from "./components/blogSection";
import MailSection from "./components/mailSection";
import Footer from "../components/footer";
// actions
import { changeLocale, getMessages } from "../components/connectedIntlProvider/actions";
import { getRecentBlogPosts, changeEmailInput, leaveScrollTop, enterScrollTop } from "./actions";
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

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.subscribeEmail = this.subscribeEmail.bind(this);
    this.handleScrollEvent = this.handleScrollEvent.bind(this);
    this.handleLocaleChange = this.handleLocaleChange.bind(this);
    this.handleScroll = throttle(this.handleScrollEvent, 100);
    this.handleScroll();
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getRecentBlogPosts());

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

    const blogPosts = intl.locale === "en" ? homeState.get("enBlogPosts") : homeState.get("koBlogPosts");

    return (
      <div>
        <Navbar handleLocaleChange={this.handleLocaleChange} intl={intl} isTop={homeState.get("isTop")} />
        <MainSection
          email={homeState.get("email")}
          subscribeEmail={this.subscribeEmail}
          handleEmailChange={this.handleEmailChange}
          intl={intl}
          mainRef={elem => (this.mainSection = elem)}
        />
        <ScholarCarousel intl={intl} />
        <CriticismSection intl={intl} />
        <PlatformSection intl={intl} />
        <RoadMapSection intl={intl} />
        <ResearchSection intl={intl} />
        <BlogSection posts={blogPosts} intl={intl} />
        <MailSection
          intl={intl}
          email={homeState.get("email")}
          subscribeEmail={this.subscribeEmail}
          handleEmailChange={this.handleEmailChange}
        />
        <Footer />
      </div>
    );
  }

  handleLocaleChange(localeCode) {
    const { dispatch } = this.props;

    const localeMessages = getMessages(localeCode);
    dispatch(changeLocale(localeCode, localeMessages));
  }

  handleScrollEvent() {
    const { dispatch } = this.props;
    if (!EnvChecker.isServer()) {
      const mainHeight = window.innerWidth > 768 ? 700 : 600;
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

  async subscribeEmail(e) {
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
        alert("You are on the subscribe list now");
        dispatch(changeEmailInput(""));
      } catch (err) {
        alert(`Failed: ${err.response.data.error}`);
      }
    }
  }
}

export default injectIntl(connect(mapStateToProps)(HomeContainer));
