import React from "react";
import Icon from "../../../components/icons";
// styles
import styles from "./scinapseForInstitutionSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const ScinapseForInstitutionSection = () => {
  return (
    <section className={styles.scinapseForInstitutionSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.contentsWrapper}>
          <div className={styles.subTitle}>SCINAPSE FOR INSTITUTION</div>
          <div className={styles.title}>
            Where users can maximize
            <br />
            their research potential
          </div>
          <div className={styles.contents}>
            Academic search engine, discovery service, resource and user data
            management for your institution. All in one.
          </div>
          <a className={styles.learnMoreButton}>
            Contact us
            <Icon icon="ARROW_FORWARD" className={styles.forwardArrowIcon} />
          </a>
        </div>
        <div className={styles.rightBox}>
          <img src="https://assets.pluto.network/pluto_team_hompage/solution%403x.png" />
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(ScinapseForInstitutionSection);
