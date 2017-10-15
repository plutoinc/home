import React from 'react';

// styles
import styles from "./problemSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const ProblemSection = () => (
  <section className={styles.problemSectionContainer}>
    <div className={styles.innerContainer}>
      problem Section
    </div>
  </section>
);

export default withStyles(styles)(ProblemSection);
