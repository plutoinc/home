import React from 'react';
// styles
import styles from './researchSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const ResearchSection = ({ intl }) => {
  return (
    <div className={styles.researchSectionContainer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.title}>
          {intl.formatMessage({ id: 'ResearchSection.title' })}
        </div>
        <ul className={styles.effectWrapper}>
          <div className={styles.row}>
            <li className={styles.effectItem}>
              <img
                className={styles.effectItemImage}
                src="https://d2vo77dayzjoat.cloudfront.net/effect-icon-1.jpg"
              />
              <div className={styles.effectItemTitle}>
                {intl.formatMessage({ id: 'ResearchSection.effectItemTitle1' })}
              </div>
              <div className={styles.effectItemDescription}>
                {intl.formatMessage({ id: 'ResearchSection.effectItemDescription1' })}
              </div>
            </li>
            <li className={styles.effectItem}>
              <img
                className={styles.effectItemImage}
                src="https://d2vo77dayzjoat.cloudfront.net/effect-icon-2.jpg"
              />
              <div className={styles.effectItemTitle}>
                {intl.formatMessage({ id: 'ResearchSection.effectItemTitle2' })}
              </div>
              <div className={styles.effectItemDescription}>
                {intl.formatMessage({ id: 'ResearchSection.effectItemDescription2' })}
              </div>
            </li>
          </div>
          <div className={styles.row}>
            <li className={styles.effectItem}>
              <img
                className={styles.effectItemImage}
                src="https://d2vo77dayzjoat.cloudfront.net/effect-icon-3.jpg"
              />
              <div className={styles.effectItemTitle}>
                {intl.formatMessage({ id: 'ResearchSection.effectItemTitle3' })}
              </div>
              <div className={styles.effectItemDescription}>
                {intl.formatMessage({ id: 'ResearchSection.effectItemDescription3' })}
              </div>
            </li>
            <li className={styles.effectItem}>
              <img
                className={styles.effectItemImage}
                src="https://d2vo77dayzjoat.cloudfront.net/effect-icon-4.jpg"
              />
              <div className={styles.effectItemTitle}>
                {intl.formatMessage({ id: 'ResearchSection.effectItemTitle4' })}
              </div>
              <div className={styles.effectItemDescription}>
                {intl.formatMessage({ id: 'ResearchSection.effectItemDescription4' })}
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default withStyles(styles)(ResearchSection);
