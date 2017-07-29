import React from 'react';
// styles
import styles from './mainSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const MainSection = () => {
    return (
      <div className={styles.mainSectionContainer}>
        <div className="container">
          <div>
            <div className={`col-md-8 col-xs-12 ${styles.headline}`}>
              Decentralized Scholarly Communication
              Platform, Pluto
            </div>
            <div className={`col-md-8 col-xs-12 ${styles.subTitle}`}>
              학술정보를 블록체인상에 구현하여 연구자가 연구에만 집중 할 수 있는 세상을 만듭니다.
            </div>

            <form className={`form-inline ${styles.emailWrapper}`}>
              <input
                placeholder="Enter your email"
                className={`form-control ${styles.emailSubmitInput}`}
                type="text"
              />
              <button className={`btn ${styles.emailSubmitButton}`}>
                구독하기
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default withStyles(styles)(MainSection);
