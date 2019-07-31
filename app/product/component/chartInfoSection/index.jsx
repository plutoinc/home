import React from "react";
// styles
import styles from "./chartInfoSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const ChartInfoSection = () => {
  return (
    <section className={styles.chartInfoSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            Optimized <br />
            for research
          </div>
          <div className={styles.subTitle}>
            Our algorithm is designed to give best search results for academic
            papers based on published date, citations, publisher, and many more.
            <br />
            We support Google-like semantic search.
          </div>
        </div>
        <div className={styles.graphContent}>
          <img src="https://assets.pluto.network/pluto_team_hompage/graph%403x.png" />
          <div className={styles.graphDescription}>
            <div className={styles.description}>
              <div className={styles.magnification}>↑ 4x</div>
              <div className={styles.subDesc}>
                We provide much fewer outdated and low-impact papers than Google
                Scholar.
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.magnification}>↑ 1.4x</div>
              <div className={styles.subDesc}>
                We provide results with generally higher average citation counts
                with similar published dates.
              </div>
            </div>
            <div className={styles.description}>
              <div className={styles.magnification}>↑ 1.5x</div>
              <div className={styles.subDesc}>
                We help bring out recently published papers in noteworthy
                journals.
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.bottomDesc}
        >{`< Comparison of top 10 papers search results between Scinapse and Google Scholar >`}</div>
      </div>
    </section>
  );
};

export default withStyles(styles)(ChartInfoSection);