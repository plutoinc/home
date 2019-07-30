import React from "react";
import Icon from "../../../components/icons";
// styles
import styles from "./representSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const RepresentSection = () => {
  return (
    <section className={styles.representSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.contentsWrapper}>
          <div className={styles.contents}>
            Do you represent a library or a university?
            <br />
            See our scinapse for institution.
          </div>
          <a className={styles.learnMoreButton}>
            Learn more
            <Icon icon="ARROW_FORWARD" className={styles.forwardArrowIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(RepresentSection);
