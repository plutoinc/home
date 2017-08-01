import React from 'react';
// styles
import styles from './roadMapSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const RoadMapSection = () => {
  return (
    <div className={styles.roadMapSectionContainer}>
      <div className={styles.title}>플루토에서 연구성과 공유 프로세스는 완전히 자동화 됩니다.</div>
      <div className={styles.subTitle}>
        플랫폼 기여자에게 적절한 보상이 이루어지게 하는 구조로 시스템을 효율화합니다.
      </div>
      <img
        className={styles.processImage}
        src="https://d2vo77dayzjoat.cloudfront.net/process-background.jpg"
      />
    </div>
  );
};

export default withStyles(styles)(RoadMapSection);
