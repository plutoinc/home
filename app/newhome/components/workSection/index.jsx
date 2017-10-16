import React from 'react';

// styles
import styles from "./workSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const WorkSection = () => (
  <section className={styles.workSectionContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.subTitle}>HOW PLUTO WORKS</div>
      <div className={styles.title}>
        <strong>Blockchain</strong> Technology takes <strong>Scholarly Communication</strong> to Whole <strong>New Level</strong>
      </div>
      <div className={styles.detail}>
        Scholarly Communication is a circulating system where academic contents are created, evaluated, shared, and reused. PLUTO makes a decentralized platform by putting this process onto blockchains.
      </div>

      <div className={styles.featureWrapper}>
        <div className={styles.featureItem}>
          <Icon icon="FEATURE_1" />
          <p className={styles.itemTitle}>
            Copyrights-Ensured
          </p>
          <p className={styles.itemDetail}>
            Through PLUTO, research achievements are totally owned and managed by original authors, not publishers.
          </p>
        </div>
        <div className={styles.featureItem}>
          <Icon icon="FEATURE_2" />
          <p className={styles.itemTitle}>
            Researcher-Governed
          </p>
          <p className={styles.itemDetail}>
            Researchers independently creates, evaluates, and disseminates the contents, without third party involvement
          </p>
        </div>
        <div className={styles.featureItem}>
          <Icon icon="FEATURE_3" />
          <p className={styles.itemTitle}>
            Manipulation-Free
          </p>
          <p className={styles.itemDetail}>
            PLUTO eliminates possibility of any fabrication, manipulation, or fraud in scholarly communications.
          </p>
        </div>
      </div>

      <p className={styles.wpBtnInfo}>For a deeper look at PLUTO</p>
      <a href="#" className={styles.wpBtn}>Read the white paper</a>

      <div className={styles.reputationSection}>
        <div className={styles.title}>
          <strong>The fair chance</strong> given to researchers <strong>accelerates science development.</strong>
        </div>
        <div className={styles.detail}>
          Resources are saved by reasonably distributing compensation and reputation for scholarly contributions.<br />
          They are again used for accelerating development of science and human society.
        </div>

        <div className={`${styles.iconWrapper} ${styles.reputationBackground}`}>
          <Icon icon="REPUTATION_BG" />
        </div>
        <div className={`${styles.iconWrapper} ${styles.reputationItem1}`}>
          <Icon icon="REPUTATION_ITEM_1" />
        </div>
        <div className={`${styles.iconWrapper} ${styles.reputationItem2}`}>
          <Icon icon="REPUTATION_ITEM_2" />
        </div>
        <div className={`${styles.iconWrapper} ${styles.reputationItem3}`}>
          <Icon icon="REPUTATION_ITEM_3" />
        </div>

      </div>
    </div>
  </section>
);

export default withStyles(styles)(WorkSection);
