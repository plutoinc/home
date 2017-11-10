import React from "react";
import { trackAndOpenLink } from "../../../helpers/handleGA";
// styles
import withStyles from "isomorphic-style-loader/lib/withStyles";
import styles from "./bottomSection.scss";
import Icon from "../../../components/icons";

const BottomSection = () => {
  return (
    <section className={styles.bottomSectionContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.balloonWrapper}>
          <Icon className={styles.balloonIcon} icon="FAQ_BALLOON" />
          <p className={styles.balloonText}>Can`t find what you`re looking for?</p>
        </div>
        <div className={styles.balloonWrapper}>
          <Icon className={styles.balloonIcon} icon="FAQ_BALLOON" />
          <p className={styles.balloonText}>Join our Telegram and ask freely!</p>
        </div>

        <a onClick={() => trackAndOpenLink("https://t.me/plutonetwork", "FAQ")} className={styles.telegramLink}>
          <Icon icon="TELEGRAM_ICON" />
          Join Pluto Telegram
        </a>
      </div>
    </section>
  );
};

export default withStyles(styles)(BottomSection);
