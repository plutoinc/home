import React from "react";
import { trackAndOpenLink, trackAction } from "../../../helpers/handleGA";
// styles
import styles from "./mainSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

function mailSubscribeCheck(params) {
  const {
    email,
    emailSubscribed,
    subscribeEmail,
    handleEmailChange,
    shown
  } = params;
  if (!emailSubscribed) {
    return (
      <div className={styles.emailFormWrapper}>
        <form
          onSubmit={e => subscribeEmail(e, "MainSection")}
          className={styles.emailWrapper}
        >
          <input
            onChange={handleEmailChange}
            placeholder="Enter your email and subscribe us"
            className={styles.emailSubmitInput}
            value={email}
            type="text"
          />
          <button className={styles.emailSubmitButton}>
            <Icon icon="RIGHT_SIDE_ARROW" />
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className={styles.submittedMessage}>
        Thank for your subscription!<br /> Pluto will send you important news.
      </div>
    );
  }
}

const MainSection = params => {
  const {
    email,
    emailSubscribed,
    subscribeEmail,
    handleEmailChange,
    shown
  } = params;
  return (
    <section
      className={`${styles.mainSectionContainer} ${shown ? styles.shown : ""}`}
    >
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          Decentralized <br /> Scholarly Communication
        </div>
        <div className={styles.subTitle}>
          Breaking down barriers in academia
        </div>
        {mailSubscribeCheck(params)}
        <Icon icon="SCROLL_INDICATOR" />
      </div>
    </section>
  );
};

export default withStyles(styles)(MainSection);
