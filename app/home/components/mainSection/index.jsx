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
        Thank for your subscription!
        <br /> Pluto will send you important news.
      </div>
    );
  }
}

function scrollDown() {
  window.scroll({
    top: 650,
    left: 0,
    behavior: "smooth"
  });
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
        <div className={styles.title}>Rediscover knowledge</div>
        <div className={styles.subTitle}>
          Pluto, where new research begins...
        </div>
      </div>
      <button onClick={() => scrollDown()} className={styles.scrollDownButton}>
        <Icon icon="SCROLL_INDICATOR" className={styles.scrollDownButtonIcon} />
      </button>
    </section>
  );
};

export default withStyles(styles)(MainSection);
