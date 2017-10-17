import React from 'react';

// styles
import styles from "./mainSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const MainSection = ({ email, subscribeEmail, handleEmailChange }) => (
  <section className={styles.mainSectionContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.title}>
        Decentralized Scholary Communication Platform
      </div>
      <div className={styles.subTitle}>
        PLUTO makes scholarly communication reasonable and transparent.
      </div>

      <div className={styles.emailFormWrapper}>
        <form
          onSubmit={subscribeEmail}
          className={`${styles.emailWrapper}`}
        >
          <input
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className={`${styles.emailSubmitInput}`}
            value={email}
            type="text"
          />
          <button className={`${styles.emailSubmitButton}`}>
            Subscribe
          </button>
        </form>
      </div>

      <div className={styles.followSection}>
        <a href="#" target="_blank" className={styles.footerIconWrapper}>
        < Icon icon="FACEBOOK_FOOTER" />
        </a>
        <a href="https://medium.com/pluto-network" target="_blank" className={styles.footerIconWrapper}>
          <Icon icon="MEDIUM_FOOTER" />
        </a>
        <a href="https://twitter.com/pluto_network" target="_blank" className={styles.footerIconWrapper}>
          <Icon icon="TWITTER_FOOTER" />
        </a>
        <a href="#" target="_blank" className={styles.footerIconWrapper}>
          <Icon icon="TELEGRAM_FOOTER" />
        </a>
        <a href="https://github.com/pluto-net" target="_blank" className={styles.footerIconWrapper}>
          <Icon icon="GITHUB_FOOTER" />
        </a>
      </div>

      <div className={styles.backgroundImage}>
        <img src="https://d2vo77dayzjoat.cloudfront.net/researchers.png" alt="" />
      </div>

    </div>

    <div className={styles.waveIcon}>
      <Icon icon="WAVES" />
    </div>
    <div className={styles.bubblesIcon}>
      <Icon icon="BUBBLES" />
    </div>
  </section>
);

export default withStyles(styles)(MainSection);
