import React from "react";

// styles
import styles from "./mailingSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const MailingSection = ({
  email,
  subscribeEmail,
  handleEmailChange,
  shown
}) => (
  <section
    className={`${styles.mailingSectionContainer} ${
      shown ? styles.shown : ""
    }`}>
    <div className={styles.innerContainer}>
      <div className={styles.ctaWrapper}>
        <Icon icon="LOGO_WHITE" />
        <div className={styles.title}>
          Join the great Innovation on Science with Pluto
        </div>
      </div>
      <div className={styles.emailFormWrapper}>
        <form
          onSubmit={e => subscribeEmail(e, "MailingSection")}
          className={styles.emailWrapper}>
          <input
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className={styles.emailSubmitInput}
            value={email}
            type="text"
          />
          <button className={styles.emailSubmitButton}>
            <Icon icon="RIGHT_SIDE_ARROW" />
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default withStyles(styles)(MailingSection);
