import React from "react";
// styles
import styles from "./serviceInfoSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const ServiceInfoSection = () => {
  return (
    <div className={styles.serviceInfoSectionContainer}>
      <div className={styles.title}>Our users since 2018 launch</div>
      <div className={styles.serviceInfoWrapper}>
        <div className={styles.serviceInfo}>
          <span className={styles.numberInfo}>196</span>
          <span className={styles.targetInfo}>Contries</span>
        </div>
        <div className={styles.serviceInfo}>
          <span className={styles.numberInfo}>1,130</span>
          <span className={styles.targetInfo}>Universities</span>
        </div>
        <div className={styles.serviceInfo}>
          <span className={styles.numberInfo}>83+</span>
          <span className={styles.targetInfo}>QS Top 100 Univ</span>
        </div>
        <div className={styles.serviceInfo}>
          <span className={styles.numberInfo}>75%+</span>
          <span className={styles.targetInfo}>Graduated level</span>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ServiceInfoSection);
