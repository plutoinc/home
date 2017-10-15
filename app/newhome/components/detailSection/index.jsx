import React from 'react';

// styles
import styles from "./detailSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const DetailSection = () => (
  <section className={styles.detailSectionContainer}>
    <div className={styles.innerContainer}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          PLUTO for <br />
          <strong>Cryptocurrency</strong>
        </div>
        <div className={styles.detail}>
          A Proof-of-Concept prototype will be launched in October 2017,<br />
          where Cryptocurrency related research articles, whitepapers, and technical blogs will be shared and evaluated.
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <a href="#" className={styles.moreDetail}>More Detail &#xE001;</a>

        <img className={styles.imgMacbook} src="https://d2vo77dayzjoat.cloudfront.net/detail-macbook.png" alt=""/>
        <img className={styles.imgPeerReview} src="https://d2vo77dayzjoat.cloudfront.net/detail-peereval.png" alt=""/>
        <img className={styles.imgComment1} src="https://d2vo77dayzjoat.cloudfront.net/detail-comment1.png" alt=""/>
        <img className={styles.imgComment2} src="https://d2vo77dayzjoat.cloudfront.net/detail-comment2.png" alt=""/>
      </div>
    </div>
  </section>
);

export default withStyles(styles)(DetailSection);
