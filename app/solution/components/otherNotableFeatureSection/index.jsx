import React from "react";
import Icon from "../../../components/icons";
// styles
import styles from "./otherNotableFeatureSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const OtherNotableFeatureSection = () => {
  return (
    <section className={styles.otherNotableFeatureSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>Other notable features</div>
        <div className={styles.contentWrapper}>
          <div className={styles.featureItem}>
            <Icon icon="CHECK_ICON" className={styles.checkIcon} />
            <div className={styles.featureContext}>
              User-friendly (Research-friendly) interface
            </div>
          </div>
          <div className={styles.featureItem}>
            <Icon icon="CHECK_ICON" className={styles.checkIcon} />
            <div className={styles.featureContext}>
              Online support and online management of user data
            </div>
          </div>

          <div className={styles.featureItem}>
            <Icon icon="CHECK_ICON" className={styles.checkIcon} />
            <div className={styles.featureContext}>
              Supports semantic search / keyword search
            </div>
          </div>

          <div className={styles.featureItem}>
            <Icon icon="CHECK_ICON" className={styles.checkIcon} />
            <div className={styles.featureContext}>Proxy service</div>
          </div>
          <div className={styles.featureItem}>
            <Icon icon="CHECK_ICON" className={styles.checkIcon} />
            <div className={styles.featureContext}>
              Provide additional licensing resources and support
            </div>
          </div>
          <div className={styles.featureItem}>
            <Icon icon="CHECK_ICON" className={styles.checkIcon} />
            <div className={styles.featureContext}>Support for consortium</div>
          </div>
          <div className={styles.featureItem}>
            <Icon icon="CHECK_ICON" className={styles.checkIcon} />
            <div className={styles.featureContext}>
              Most relevant and efficient results based on citation count,
              journal IF, Conferences tier, authors' h-index, published date
            </div>
          </div>
          <div className={styles.featureItem}>
            <Icon icon="CHECK_ICON" className={styles.checkIcon} />
            <div className={styles.featureContext}>
              Provide Open Access resources
              <br />
              (provide link to pre-prints of OA journals and non-oa journals)
            </div>
          </div>
          <div className={styles.featureItem}>
            <Icon icon="CHECK_ICON" className={styles.checkIcon} />
            <div className={styles.featureContext}>
              Provide preprint repositories available within
              institution/university
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(OtherNotableFeatureSection);
