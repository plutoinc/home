import React from 'react';

// styles
import styles from "./mainSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const MainSection = () => (
  <section className={styles.mainSectionContainer}>
    <div className={styles.innerContainer}>
      hello world
    </div>
  </section>
);

export default withStyles(styles)(MainSection);
