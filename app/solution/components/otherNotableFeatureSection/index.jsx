import React from "react";
// styles
import styles from "./otherNotableFeatureSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const OtherNotableFeatureSection = () => {
  return (
    <section className={styles.otherNotableFeatureSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.subTitle}>COMPARE</div>
        <div className={styles.title}>Interface & Paper Duplicates</div>
        <div className={styles.contentDivider} />
        <div className={styles.chartContainer}>
          <div className={styles.chartWrapper}>
            <img src="https://assets.pluto.network/pluto_team_hompage/compareChart%403x.png" />
          </div>
          <div className={styles.focusArea} />
        </div>
        <div className={styles.smallContext}>
          *duplicate results may occur due to error in metadata aggregation,
          duplicate subscription, or indexing error
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(OtherNotableFeatureSection);
