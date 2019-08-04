import React from "react";
// styles
import { Link } from "react-router";
import styles from "./mainSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const MainSection = params => {
  const { shown } = params;
  return (
    <section
      className={`${styles.mainSectionContainer} ${shown ? styles.shown : ""}`}
    >
      <div className={styles.backgroundImg}>
        <div className={styles.innerContainer}>
          <div className={styles.title}>Rediscover knowledge</div>
          <div className={styles.subTitle}>
            Pluto, where new research begins...
          </div>
          <div className={styles.buttonWrapper}>
            <Link className={styles.ourProductButton} to="/product">
              Our Product
            </Link>

            <Link className={styles.learnMoreButton} to="/contact">
              Contact Us
              <Icon icon="ARROW_FORWARD" className={styles.forwardArrowIcon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(MainSection);
