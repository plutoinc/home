import React from "react";
// styles
import styles from "./plutoInfo.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

const PlutoInfo = () => {
  return (
    <section className={styles.plutoInfoContainer}>
      <div className={styles.backgroundImg}>
        <div className={styles.innerContainer}>
          <div className={styles.contentsWrapper}>
            <img
              className={styles.logoImg}
              src="https://assets.pluto.network/pluto_team_hompage/pluto-logo-white@3x.png"
            />

            <div className={styles.contents}>
              A group of highly talented engineers and researchers who are
              passionate about scholarly communication. We're here to break down
              barriers in academia.
              <br />
              <br />
              Not only do we enjoy solving problems surrounding the academia
              world, but we also plan to open a new era of research and academia
              through new forms of exchanging information and knowledge. By
              supporting universities and scholars through technology, we
              believe scholarly communication can fully be powered by
              researchers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withStyles(styles)(PlutoInfo);
