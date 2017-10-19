import React from 'react';
// styles
import styles from './roadMapSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const RoadMapSection = ({ intl }) => {
  const imageUrl = new Array(5);
  if (intl.locale === 'ko') {
    for (let i = 0; i < 5; i += 1) {
      imageUrl[i] = `https://d2vo77dayzjoat.cloudfront.net/roadMap/ko/step-${i + 1}.png`;
    }
  } else {
    for (let i = 0; i < 5; i += 1) {
      imageUrl[i] = `https://d2vo77dayzjoat.cloudfront.net/roadMap/en/step-${i + 1}.png`;
    }
  }

  return (
    <div className={styles.roadMapSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.smallTitle}>WHAT WE DO</div>
        <div className={styles.title}>
          {intl.formatMessage({ id: 'RoadMapSection.title' })}
        </div>

        <div className={styles.stepWrapper}>
          <div className={styles.contentWrapper}>
            <span className={styles.stepIndex}>01</span>
            <div className={styles.stepTitle}>
              {intl.formatMessage({ id: 'RoadMapSection.stepTitle1' })}
            </div>
            <div className={styles.stepDescription}>
              {intl.formatMessage({ id: 'RoadMapSection.stepDescription1' })}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img className={`${styles.stepImage} ${styles.image1}`} src={imageUrl[0]} />
          </div>
        </div>

        <div className={styles.stepWrapper}>
          <div className={styles.contentWrapper}>
            <span className={styles.stepIndex}>02</span>
            <div className={styles.stepTitle}>
              {intl.formatMessage({ id: 'RoadMapSection.stepTitle2' })}
            </div>
            <div className={styles.stepDescription}>
              {intl.formatMessage({ id: 'RoadMapSection.stepDescription2' })}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img className={`${styles.stepImage} ${styles.image2}`} src={imageUrl[1]} />
          </div>
        </div>

        <div className={styles.stepWrapper}>
          <div className={styles.contentWrapper}>
            <span className={styles.stepIndex}>03</span>
            <div className={styles.stepTitle}>
              {intl.formatMessage({ id: 'RoadMapSection.stepTitle3' })}
            </div>
            <div className={styles.stepDescription}>
              {intl.formatMessage({ id: 'RoadMapSection.stepDescription3' })}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img className={`${styles.stepImage} ${styles.image3}`} src={imageUrl[2]} />
          </div>
        </div>

        <div className={styles.stepWrapper}>
          <div className={styles.contentWrapper}>
            <span className={styles.stepIndex}>04</span>
            <div className={styles.stepTitle}>
              {intl.formatMessage({ id: 'RoadMapSection.stepTitle4' })}
            </div>
            <div className={styles.stepDescription}>
              {intl.formatMessage({ id: 'RoadMapSection.stepDescription4' })}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img className={`${styles.stepImage} ${styles.image4}`} src={imageUrl[3]} />
          </div>
        </div>

        <div className={styles.stepWrapper}>
          <div className={styles.contentWrapper}>
            <span className={styles.stepIndex}>05</span>
            <div className={styles.stepTitle}>
              {intl.formatMessage({ id: 'RoadMapSection.stepTitle5' })}
            </div>
            <div className={styles.stepDescription}>
              {intl.formatMessage({ id: 'RoadMapSection.stepDescription5' })}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img className={`${styles.stepImage} ${styles.image5}`} src={imageUrl[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(RoadMapSection);
