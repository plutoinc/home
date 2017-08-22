import React from 'react';
// styles
import styles from './mainSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Icon from '../../../components/icons';

const MainSection = ({ intl, email, subscribeEmail, handleEmailChange, mainRef }) => (
  <div className={styles.mainSectionContainer} ref={ref => { mainRef(ref); }}>
    <div className={`container ${styles.innerContainer}`}>
      <div>
        <div className="row">
          <div className={`col-md-12 col-xs-12 ${styles.headline}`}>
              Decentralized Scholarly Communication
              Platform, Pluto
            </div>
          <div className={`col-md-12 col-xs-12 ${styles.subTitle}`}>
            {intl.formatMessage({ id: 'MAIN_SECTION.subtitle' })}
          </div>
        </div>

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

        <div className={styles.iconsWrapper}>
          <a href="https://github.com/pluto-net" target="_blank" className={styles.icon}>
            <Icon icon="GITHUB_WHITE" />
          </a>
          {/* <a href="/" className={styles.icon}>
            <Icon icon="REDDIT_WHITE" />
          </a> */}
          <a href="https://twitter.com/pluto_network" target="_blank" className={styles.icon}>
            <Icon icon="TWITTER_WHITE" />
          </a>
          <a href="https://medium.com/pluto-network" target="_blank" className={styles.icon}>
            <Icon icon="MEDIUM_WHITE" />
          </a>
        </div>
      </div>
    </div>
  </div>
  );

export default withStyles(styles)(MainSection);
