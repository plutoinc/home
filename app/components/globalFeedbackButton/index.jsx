import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../icons";
import styles from './globalFeedbackButton.scss';

const GlobalFeedbackButton = () => {
  return (
    <div>
      <div className={`btn-group dropup ${styles.dropdownButtonGroup}`}>
        <div className={`dropdown-toggle ${styles.dropdownButton}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <Icon icon="WHITE_LOGO" className={styles.logoIcon} />
        </div>
        <div className={`dropdown-menu dropdown-menu-right ${styles.dropdownMenuWrapper}`}>
          <div className={styles.greetingBlock}>
            Hi, There! 👋
          </div>
          <div className={`${styles.dropdownHeader}`}>
            {`Need help?\nHave any inquiry about us?\nLeave a message or join to chat with us!\nOne of our staff will respond lightning fast.`}
          </div>
          <a className={styles.dropdownItem} href="mailto:team@pluto.network">Send E-Mail ✉️</a>
          <a className={styles.dropdownItem} target="_blank" href="https://goo.gl/forms/K9koaC32cnMi0Ez32">Whitepaper Feedback ✍️ </a>
          <a className={styles.dropdownItem} target="_blank" href="https://t.me/plutonetwork">Direct Conversation 🗣</a>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(GlobalFeedbackButton);
