import React from 'react';

// styles
import styles from "./detailSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const DetailSection = () => (
  <section className={styles.detailSectionContainer}>
    <div className={styles.innerContainer}>
      detailSection
    </div>
  </section>
);

export default withStyles(styles)(DetailSection);
