import React from 'react';

// styles
import styles from "./pocSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const POCSection = () => (
  <section className={styles.pocSectionContainer}>
    <div className={styles.innerContainer}>
      pocSection
    </div>
  </section>
);

export default withStyles(styles)(POCSection);
