import React from "react";
import Icon from "../../../components/icons";
// styles
import styles from "./tryScinapseSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const TryScinapseSection = () => {
  return (
    <section className={styles.tryScinapseSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.contentsWrapper}>
          <div className={styles.contents}>
            <div className={styles.subTitle}>Are you a researcher? </div>
            <div className={styles.title}>Try scinapse now!</div>
          </div>
          <a
            className={styles.learnMoreButton}
            href="https://scinapse.io"
            target="_blank"
          >
            Go to Scinapse
            <Icon icon="ARROW_FORWARD" className={styles.forwardArrowIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(TryScinapseSection);
