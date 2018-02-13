import React from "react";

// styles
import styles from "./mailingSection.scss";
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

const MailingSection = params => {
  const {
    email,
    emailSubscribed,
    subscribeEmail,
    handleEmailChange,
    shown
  } = params;
  return (
    <section
      className={`${styles.mailingSectionContainer} ${
        shown ? styles.shown : ""
      }`}
    >
      <div className={styles.innerContainer}>
        <div className={styles.ctaWrapper}>
          <Icon icon="LOGO_WHITE" />
          <div className={styles.title}>
            Join the great Innovation on Science with Pluto
          </div>
        </div>
        {mailSubscribeCheck(params)}
      </div>
    </section>
  );
};

export default withStyles(styles)(MailingSection);
