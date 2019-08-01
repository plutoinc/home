import React from "react";
import { connect } from "react-redux";
import throttle from "lodash.throttle";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import BusinessContactForm from "./components/businessContactForm";
import PersonalContactForm from "./components/personalContactForm";
import Header from "../components/header";
import Footer from "../components/newfooter";
import styles from "./contact.scss";
import Icon from "../components/icons";
import EnvChecker from "../helpers/envChecker";
import { enterScrollTop, leaveScrollTop } from "../home/actions";

function mapStateToProps(appState) {
  return {
    homeState: appState.home
  };
}

class Contact extends React.PureComponent {
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
      <div className={styles.pageWrapper}>
        <Header isTop={homeState.get("isTop")} currentCategory={"contact"} />
        <div className={styles.container}>
          <h1 className={styles.title}>Contact us</h1>
          <div className={styles.greeting}> Thanks for reaching out!</div>
          <div className={styles.formWrapper}>
            <div className={styles.formTitle}>
              Contact Form for corporate/university
            </div>
            <BusinessContactForm />
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.formTitle}>
              Contact Form for researchers/anyone
            </div>
            <PersonalContactForm />
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.bottomContainer}>
            <div className={styles.leftBox}>
              <div className={styles.bottomSubtitle}>Are you a researcher?</div>
              <div className={styles.bottomTitle}>Try scinapse now!</div>
            </div>
            <div className={styles.rightBox}>
              <a
                href="https://scinapse.io"
                target="_blank"
                className={styles.scinapseLink}
              >
                Go to Scinapse
                <Icon
                  icon="ARROW_FORWARD"
                  className={styles.forwardArrowIcon}
                />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
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

export default connect(mapStateToProps)(withStyles(styles)(Contact));
