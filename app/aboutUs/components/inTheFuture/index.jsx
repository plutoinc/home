import React from "react";
// styles
import styles from "./inTheFuture.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const InTheFuture = () => {
  return (
    <section className={styles.inTheFutureContainer}>
      <div className={styles.backgroundImg}>
        <div className={styles.backgroundOpacityColor} />
        <div className={styles.innerContainer}>
          <div className={styles.content}>
            We do not solely support OA or any other particular type of access.
            <br />
            We want to optimize every researcher's research experience from
            initial research to its publication. <br />
            In the future, we hope to incorporate blockchain technology in the
            field of scholarly communication to take academia to a whole new
            level.
          </div>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(InTheFuture);
