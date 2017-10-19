import React from 'react';
// styles
import styles from './mainSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Icon from "../../../components/icons";

const MainSection = ({ intl, email, subscribeEmail, handleEmailChange, mainRef }) => (
  <div className={styles.mainSectionContainer} ref={ref => { mainRef(ref); }}>
    <div className={styles.mainBackgroundContainer}></div>
    <div className={`container ${styles.innerContainer}`}>
      <div>
        <div className="row">
          <div className={styles.headline}>
              <span>Decentralized</span>Scholarly Communication Platform
            </div>
          <div className={styles.subTitle}>
            {intl.formatMessage({ id: 'MAIN_SECTION.subtitle' })}
          </div>
        </div>

        <ul className={styles.snsBtnList}>
          <li>
            <a className={styles.menuItem} href="https://www.facebook.com/Pluto-263226227503100/" target="_blank">
              <Icon icon="FACEBOOK_COLOR" />
            </a>
          </li>
          <li>
            <a className={styles.menuItem} href="#" target="_blank">
              <Icon icon="TELEGRAM_COLOR" />
            </a>
          </li>
          <li>
            <a className={styles.menuItem} href="https://twitter.com/pluto_network" target="_blank">
              <Icon icon="TWITTER_COLOR" />
            </a>
          </li>
        </ul>

        <form
          onSubmit={subscribeEmail}
          className={`form-inline ${styles.emailWrapper}`}
        >
          <input
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className={`form-control ${styles.emailSubmitInput}`}
            value={email}
            type="text"
          />
          <button className={`btn ${styles.emailSubmitButton}`}>
            {intl.formatMessage({ id: 'MAIN_SECTION.subscribe' })}
          </button>
        </form>
      </div>
    </div>
  </div>
  );

export default withStyles(styles)(MainSection);
