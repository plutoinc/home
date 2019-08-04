import React from "react";
// styles
import Icon from "../../../components/icons";
import styles from "./keyInfoSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { DefaultButton } from "../../../home/components/commonButton";
import { PRODUCT_URL } from "../../../routes";

const KeyInfoSection = () => {
  return (
    <section className={styles.keyInfoSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.contentsWrapper}>
          <div className={styles.subTitle}>PRODUCT</div>
          <div className={styles.title}>
            Scinapse: <br />
            Most relevant papers at
            <br />
            your finger tips
          </div>
          <div className={styles.description}>
            High-performing academic search engine backed by Pluto's original
            algorithm optimized for academic research. And it's free.
          </div>
          <DefaultButton
            url={PRODUCT_URL}
            text={
              <span>
                Try Scinapse Now{" "}
                <Icon
                  icon="ARROW_FORWARD"
                  className={styles.forwardArrowIcon}
                />
              </span>
            }
            from="productSection"
          />
        </div>
        <div className={styles.mokeupContainer}>
          <img src="https://assets.pluto.network/pluto_team_hompage/scinapse-mock.png" />
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(KeyInfoSection);
