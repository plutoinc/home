import React from 'react';
// styles
import styles from './roadMapSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const RoadMapSection = ({ intl }) => {
  let imageUrl;
  if (intl.locale === 'ko') {
    imageUrl = 'https://d2vo77dayzjoat.cloudfront.net/process-kor.jpg';
  } else {
    imageUrl = 'https://d2vo77dayzjoat.cloudfront.net/process-en.jpg';
  }

  return (
    <div className={styles.roadMapSectionContainer}>
      <div className={`container`}>
        <div className={styles.title}>
          {intl.formatMessage({ id: 'RoadMapSection.title' })}
        </div>
        <div className={styles.subTitle}>
          {intl.formatMessage({ id: 'RoadMapSection.subTitle' })}
        </div>
        <img
          className={styles.processImage}
          src={imageUrl}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(RoadMapSection);
