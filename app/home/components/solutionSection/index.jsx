import React from "react";
import { Link } from "react-router";
import Icon from "../../../components/icons";
// styles
import styles from "./solutionSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const SolutionSection = () => {
  return (
    <section className={styles.solutionSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.contentsWrapper}>
          <div className={styles.subTitle}>SOLUTION</div>
          <div className={styles.title}>Scinapse for institution</div>
          <div className={styles.contents}>
            Academic search engine, discovery service, resource and user data
            management customized for your institution. All-in-one package.
            <br />
            <br />
            Engineered to provide the best research experience for both scholars
            and university libraries.
          </div>
          <div className={styles.menuWrapper}>
            <div className={styles.menuItem}>
              <img
                className={styles.menuIcon}
                src="https://assets.pluto.network/pluto_team_hompage/researchers@3x.png"
              />
              <div className={styles.menuContentWrapper}>
                <div className={styles.menuTitle}>Researchers</div>
                <div className={styles.menuContent}>
                  No more switching back and forth between Google scholar and
                  your university's discovery service.
                </div>
              </div>
            </div>
            <div className={styles.menuItem}>
              <img
                className={styles.menuIcon}
                src="https://assets.pluto.network/pluto_team_hompage/libraries@3x.png"
              />
              <div className={styles.menuContentWrapper}>
                <div className={styles.menuTitle}>Libraries</div>
                <div className={styles.menuContent}>
                  No more bundled journal subscriptions and services. Say
                  goodbye to duplicate results and indexing errors.
                </div>
              </div>
            </div>
          </div>
          <Link to="/solution" className={styles.learnMoreButton}>
            Learn more
            <Icon icon="ARROW_FORWARD" className={styles.forwardArrowIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(SolutionSection);
