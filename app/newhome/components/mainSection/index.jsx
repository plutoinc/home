import React from 'react';
import { trackAndOpenLink, trackAction } from "../../../helpers/handleGA";
// styles
import styles from "./mainSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const MainSection = ({ email, subscribeEmail, handleEmailChange }) => (
  <section className={styles.mainSectionContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.title}>
        Decentralized Scholarly Communication Platform
      </div>
      <div className={styles.subTitle}>
        PLUTO makes scholarly communication reasonable and transparent.
      </div>

      <div className={styles.emailFormWrapper}>
        <form
          onSubmit={e => subscribeEmail(e, "MainSection")}
          className={styles.emailWrapper}
        >
          <input
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className={styles.emailSubmitInput}
            value={email}
            type="text"
          />
          <button className={styles.emailSubmitButton}>
            Subscribe
          </button>
        </form>
      </div>

      <div className={styles.followSection}>
        <a onClick={() => trackAndOpenLink("https://www.facebook.com/Pluto-263226227503100/", "Footer")} className={styles.footerIconWrapper}>
        <Icon icon="FACEBOOK_FOOTER" />
        </a>
        <a onClick={() => trackAndOpenLink("https://medium.com/pluto-network", "MainSection")} className={styles.footerIconWrapper}>
          <Icon icon="MEDIUM_FOOTER" />
        </a>
        <a onClick={() => trackAndOpenLink("https://twitter.com/pluto_network", "Footer")} className={styles.footerIconWrapper}>
          <Icon icon="TWITTER_FOOTER" />
        </a>
        {/* <a href="#" target="_blank" className={styles.footerIconWrapper}>
          <Icon icon="TELEGRAM_FOOTER" />
        </a> */}
        <a onClick={() => trackAndOpenLink("https://github.com/pluto-net", "Footer")} className={styles.footerIconWrapper}>
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
