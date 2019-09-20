import React from "react";
// styles
import Icon from "../../../components/icons";
import styles from "./backgroundAndWhitePaper.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { WHITE_PAPER_ADDRESS } from "../../../routes";

const BackgroundAndWhitePaper = () => {
  return (
    <section className={styles.backgroundAndWhitePaperContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.titleWrapper}>
          Our background and former white paper
        </div>
        <div className={styles.buttonWrapper}>
          <a className={styles.learnMoreButton} href={WHITE_PAPER_ADDRESS}>
            Whitepaper
            <Icon icon="ARROW_IOS_DOWN" className={styles.forwardArrowIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(BackgroundAndWhitePaper);
