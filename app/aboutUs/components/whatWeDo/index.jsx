import React from "react";
import { Link } from "react-router";
// styles
import Icon from "../../../components/icons";
import styles from "./whatWeDo.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const WhatWeDo = () => {
  return (
    <section className={styles.whatWeDoContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.leftBox}>
          <img src="https://assets.pluto.network/pluto_team_hompage/what-we-do@3x.png" />
        </div>
        <div className={styles.rightBox}>
          <div className={styles.title}>What we do</div>
          <img src="https://assets.pluto.network/pluto_team_hompage/what-we-do@3x.png" />
          <div className={styles.content}>
            We provide a SaaS solution that includes both a discovery and
            academic search engine customized for your institution. <br />
            It also comes with a consultancy-based solution, in which we provide
            real feedback on how you can cut back on your subscriptions based on
            what your researchers need and don’t need, as well as how to provide
            the most resourceful environment for your scholars and researchers.
            <br />
            <br />
            We help walk through your subscriptions and bundles, and visually
            compare search results to identify what improvements and reductions
            can be made for your university.
          </div>
          <Link className={styles.learnMoreButton} to="/solution">
            See our solution
            <Icon icon="ARROW_FORWARD" className={styles.forwardArrowIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(WhatWeDo);
