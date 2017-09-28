import React from 'react';

// styles
import styles from "./techSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const TechSection = () => (
  <section className={styles.techSectionContainer}>
    <div className={styles.innerContainer}>
      tech Section
    </div>
  </section>
);

export default withStyles(styles)(TechSection);
