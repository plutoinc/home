import React from 'react';

// styles
import styles from "./workSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const WorkSection = () => (
  <section className={styles.workSectionContainer}>
    <div className={styles.innerContainer}>
      workSection
    </div>
  </section>
);

export default withStyles(styles)(WorkSection);
