import React from "react";
import Icon from "../../../components/icons";
// styles
import styles from "./problemSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const ProblemSection = () => {
  return (
    <section className={styles.problemSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.leftBox}>
          <img src="https://assets.pluto.network/pluto_team_hompage/problem%403x.png" />
        </div>
        <div className={styles.rightBox}>
          <div className={styles.title}>
            Problem with
            <br />
            the research environment
          </div>
          <div className={styles.description}>
            Universities have always subscribed to journal publications and
            other published materials for their students, faculties, and
            researchers. Meanwhile, publishers have raised their subscription
            prices, monopolized the journal market, and created undecipherable
            bundling of journals and services.
            <br />
            <br />
            This has led to libraries and universities to maintain resources at
            unbearable costs. Because of this, the researchers and scholars who
            actually produce and continue to produce the work suffer the most.
          </div>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(ProblemSection);
