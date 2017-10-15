import React from 'react';

// styles
import styles from "./achieveSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const AchieveSection = () => (
  <section className={styles.achieveSectionContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.subTitle}>WHAT WE ACHIEVE</div>
      <div className={styles.title}>
        PLUTO opens a new chapter in <strong>future academic society</strong>
      </div>

      <div className={styles.subSection}>
        <div className={`${styles.achieveItem} ${styles.active}`}>
          <p className={styles.itemTitle}>
            Communication and collaboration in all phases of research
          </p>
          <p>
            Various forms of research achievements can be shared effectively, enabling communication and collaboration in all phases of research.
          </p>
        </div>

        <div className={styles.achieveItem}>
          <p className={styles.itemTitle}>
            Fair opportunities for researchers
          </p>
          <p>
            Alienated researchers are also given the opportunity to be recognized and reasonably funded so that they can contribute to the advancement of the scientific community.
          </p>
        </div>

        <div className={styles.achieveItem}>
          <p className={styles.itemTitle}>
            Research for science development, not for paper publication
          </p>
          <p>
            Since researchers can get away with the traditional research practices that are focused on simply increasing the number of papers, they can do research in true sense.
          </p>
        </div>

        <div className={styles.achieveItem}>
          <p className={styles.itemTitle}>
            Transparent and efficient communication
          </p>
          <p>
            Transparent and efficient communication on the blockchain facilitates scientific development by reasonably allocating research resources and reducing unnecessary waste.
          </p>
        </div>
      </div>

      <div className={`${styles.subSection} ${styles.itemImageWrapper}`}>
        <img src="http://placehold.it/380x362/eceaea" alt="" className={styles.itemImage} />
      </div>

    </div>
  </section>
);

export default withStyles(styles)(AchieveSection);
