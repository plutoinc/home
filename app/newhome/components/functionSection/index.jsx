import React from 'react';

// styles
import styles from "./functionSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const FunctionSection = () => (
  <section className={styles.functionSectionContainer}>
    <div className={styles.innerContainer}>
      functionSection
    </div>
  </section>
);

export default withStyles(styles)(FunctionSection);
