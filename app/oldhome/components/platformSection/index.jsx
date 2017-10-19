import React from 'react';
// styles
import styles from './platformSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const PlatformSection = ({ intl }) => {
  return (
    <div className={styles.platformSectionContainer}>
      <div className={`container ${styles.innerContainer}`}>
        <div className={styles.title}>
          {intl.formatMessage({ id: 'PlatformSection.title' })}
        </div>
        <div className={styles.description}>
          {intl.formatMessage({ id: 'PlatformSection.description' })}
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(PlatformSection);
