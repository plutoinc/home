import React from "react";
import { trackAndOpenLink, trackAction } from "../../../helpers/handleGA";
// styles
import styles from "./mainSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const MainSection = ({
  email,
  emailSubscribed,
  subscribeEmail,
  handleEmailChange,
  shown
}) => {
  return (
    <section
      className={`${styles.mainSectionContainer} ${shown ? styles.shown : ""}`}
    >
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          Decentralized <br /> Scholarly Communication
        </div>
        <div className={styles.subTitle}>
          Breaking down barriers in academia
        </div>

        {!emailSubscribed && (
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
        )}
        {emailSubscribed && (
          <div className={styles.submittedMessage}>
            Thank for your subscription!<br /> Pluto will send you important
            news.
          </div>
        )}
        <Icon icon="SCROLL_INDICATOR" />
      </div>
    </section>
  );
};

export default withStyles(styles)(MainSection);
