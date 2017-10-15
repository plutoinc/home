import React from 'react';

// styles
import styles from "./achieveSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const AchieveSection = () => (
  <section className={styles.achieveSectionContainer}>
    <div className={styles.innerContainer}>
      achieveSection
    </div>
  </section>
);

export default withStyles(styles)(AchieveSection);
