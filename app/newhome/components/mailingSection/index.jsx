import React from 'react';

// styles
import styles from "./mailingSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const MailingSection = () => (
  <section className={styles.mailingSectionContainer}>
    <div className={styles.innerContainer}>

      <div className={styles.title}>
        Join the great <strong>Innovation on Scholarly Communication</strong> with PLUTO
      </div>

      <div className={styles.emailFormWrapper}>
        <form
          /* onSubmit={subscribeEmail} */
          className={`${styles.emailWrapper}`}
        >
          <input
            /* onChange={handleEmailChange} */
            placeholder="Enter your email"
            className={`${styles.emailSubmitInput}`}
            /* value={email} */
            type="text"
          />
          <button className={`${styles.emailSubmitButton}`}>
            Subscribe
          </button>
        </form>
      </div>


    </div>
  </section>
);

export default withStyles(styles)(MailingSection);
