import React from "react";
// styles
import Icon from "../../../components/icons";
import styles from "./scinapseFeatureInfoSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const ScinapseFeatureInfoSection = () => {
  return (
    <section className={styles.ScinapseFeatureInfoSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          Save research time, Save screen time.
        </div>
        <div className={styles.subTitle}>
          Intuitive interface provides everything you need to know about a paper
          in one look
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(ScinapseFeatureInfoSection);
