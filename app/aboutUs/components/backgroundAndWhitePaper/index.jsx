import React from "react";
import { Link } from "react-router";
// styles
import Icon from "../../../components/icons";
import styles from "./backgroundAndWhitePaper.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const BackgroundAndWhitePaper = () => {
  return (
    <section className={styles.backgroundAndWhitePaperContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.titleWrapper}>
          Our background and former white paper
        </div>
        <div className={styles.buttonWrapper}>
          <Link className={styles.learnMoreButton} to="/solution">
            Former website
          </Link>
          <Link className={styles.learnMoreGrayButton} to="/solution">
            Whitepaper
            <Icon icon="ARROW_IOS_DOWN" className={styles.forwardArrowIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(BackgroundAndWhitePaper);
