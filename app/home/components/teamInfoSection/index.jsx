import React from "react";
import Icon from "../../../components/icons";
// styles
import styles from "./teamInfoSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const TeamInfoSection = () => {
  return (
    <section className={styles.teamInfoSectionContainer}>
      <div className={styles.subTitle}>WHO WE ARE</div>
      <div className={styles.title}>
        We're here to break down
        <br />
        barriers in academia.
      </div>
      <div className={styles.contents}>
        We believe scholarly communication is for researchers and should be
        powered by researchers.
        <br />
        <br />
        We hope for a open & transparent academia world for the advancement of
        human knowledge and science.
      </div>
      <div className={styles.buttonWrapper}>
        <a className={styles.learnMoreButton}>
          Read more
          <Icon icon="ARROW_FORWARD" className={styles.forwardArrowIcon} />
        </a>
      </div>
    </section>
  );
};

export default withStyles(styles)(TeamInfoSection);
