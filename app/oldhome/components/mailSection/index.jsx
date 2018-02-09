import React from "react";
// styles
import styles from "./mailSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const MailSection = ({ intl, email, subscribeEmail, handleEmailChange }) => {
  return (
    <div className={styles.mailSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          {intl.formatMessage({ id: "MailSection.title" })}
        </div>
        <div className={styles.subTitle}>
          {intl.formatMessage({ id: "MailSection.subTitle" })}
        </div>
        <div className={styles.emailInputWrapper}>
          <form
            onSubmit={subscribeEmail}
            className={`form-inline ${styles.emailWrapper}`}>
            <input
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className={`form-control ${styles.emailSubmitInput}`}
              value={email}
              type="text"
            />
            <button className={`btn ${styles.emailSubmitButton}`}>
              {intl.formatMessage({ id: "MAIN_SECTION.subscribe" })}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(MailSection);
