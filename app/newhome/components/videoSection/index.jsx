import React from 'react';

// styles
import styles from "./videoSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const VideoSection = () => (
  <section className={styles.videoSectionContainer}>
    <div className={styles.innerContainer}>
      videoSection
    </div>
  </section>
);

export default withStyles(styles)(VideoSection);
