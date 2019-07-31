import React from "react";
// styles
import styles from "./mainSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const MainSection = params => {
  const { shown } = params;
  return (
    <section
      className={`${styles.mainSectionContainer} ${shown ? styles.shown : ""}`}
    >
      <div className={styles.innerContainer}>
        <div className={styles.title}>Rediscover knowledge</div>
        <div className={styles.subTitle}>
          Pluto, where new research begins...
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(MainSection);
