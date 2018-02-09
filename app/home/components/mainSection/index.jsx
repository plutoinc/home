import React from "react";
import { trackAndOpenLink, trackAction } from "../../../helpers/handleGA";
// styles
import styles from "./mainSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const MainSection = ({ email, subscribeEmail, handleEmailChange, shown }) => (
  <section
    className={`${styles.mainSectionContainer} ${shown ? styles.shown : ""}`}
  >
    <div className={styles.innerContainer}>
      <div className={styles.title}>
        Decentralized <br /> Scholarly Communication
      </div>
      <div className={styles.subTitle}>Breaking down barriers in academia</div>

      <div className={styles.emailFormWrapper}>
        <form
          onSubmit={e => subscribeEmail(e, "MainSection")}
          className={styles.emailWrapper}
        >
          <input
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className={styles.emailSubmitInput}
            value={email}
            type="text"
          />
          <button className={styles.emailSubmitButton}>
            <Icon icon="RIGHT_SIDE_ARROW" />
          </button>
        </form>
      </div>
      <Icon icon="SCROLL_INDICATOR" />
    </div>
  </section>
);

export default withStyles(styles)(MainSection);
