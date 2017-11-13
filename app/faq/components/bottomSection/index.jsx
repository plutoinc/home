import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { trackAndOpenLink } from "../../../helpers/handleGA";
// styles
import withStyles from "isomorphic-style-loader/lib/withStyles";
import styles from "./bottomSection.scss";
import Icon from "../../../components/icons";

class BottomSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shown: false,
    };
  }
  render() {
    return (
      <section className={styles.bottomSectionContainer}>
        <VisibilitySensor
          partialVisibility
          onChange={isVisible => {
            if (isVisible) {
              this.setState({ shown: true });
            }
          }}
        >
          <div className={`${styles.innerContainer} ${this.state.shown ? styles.shown : ""}`}>
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
        </VisibilitySensor>
      </section>
    );
  }
}

export default withStyles(styles)(BottomSection);
