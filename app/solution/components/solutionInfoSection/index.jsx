import React from "react";
import Icon from "../../../components/icons";
// styles
import styles from "./solutionInfoSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const SolutionInfoSection = () => {
  return (
    <section className={styles.solutionInfoSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.infoWrapper}>
            <Icon icon="NO_MORE_BUNDLING" className={styles.infoIcon} />
            <div className={styles.title}>
              No More
              <br />
              Bundling
            </div>
            <div className={styles.description}>
              We help you reduce cost in subscriptions and reach your budget
              reduction targets.
            </div>
          </div>
          <div className={styles.infoWrapper}>
            <Icon icon="KNOW_YOUR_RESEARCHER" className={styles.infoIcon} />
            <div className={styles.title}>
              Know your
              <br />
              researchers' needs
            </div>
            <div className={styles.description}>
              What your research users do not need is equally important as what
              they do need. We help you identify them subscription by
              subscription, journal by journal.
            </div>
          </div>

          <div className={styles.infoWrapper}>
            <Icon icon="NO_MORE_BUNDLING" className={styles.infoIcon} />
            <div className={styles.title}>Intuitive</div>
            <div className={styles.description}>
              A simple, efficient, high-powered platform and interface that both
              researchers and librarians can actually enjoy using.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(SolutionInfoSection);
