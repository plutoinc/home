import React from 'react';
// styles
import styles from './mainSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const MainSection = ({ intl, email, subscribeEmail, handleEmailChange }) => {
  return (
    <div className={styles.mainSectionContainer}>
      <div className="container">
        <div>
          <div className="row">
            <div className={`col-md-8 col-xs-12 ${styles.headline}`}>
              Decentralized Scholarly Communication
              Platform, Pluto
            </div>
            <div className={`col-md-8 col-xs-12 ${styles.subTitle}`}>
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
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(MainSection);
