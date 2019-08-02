import React from "react";
// styles
import { Link } from "react-router";
import styles from "./mainSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { DefaultButton } from "../commonButton";
import Icon from "../../../components/icons";
import { PRODUCT_URL } from "../../../routes";

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
            <DefaultButton
              url={PRODUCT_URL}
              text="Our Product"
              from="mainSection"
            />
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
