import React from 'react';

// styles
import styles from "./rewardSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const RewardSection = () => (
  <section className={styles.rewardSectionContainer}>
    <div className={styles.innerContainer}>
      rewardSection
    </div>
  </section>
);

export default withStyles(styles)(RewardSection);
