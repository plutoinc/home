import React from "react";
import { trackAndOpenLink } from "../../../helpers/handleGA";
import VisibilitySensor from "react-visibility-sensor";
// styles
import styles from "./pressSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

class PressSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      itemShown: false
    };
  }
  render() {
    const { shown } = this.props;
    return (
      <section
        className={`${styles.pressSectionContainer} ${
          shown ? styles.shown : ""
        }`}>
        <div className={styles.innerContainer}>
          <div className={styles.subTitle}>Pluto in the Press</div>
          <div className={styles.pressWrapper}>
            <div className={styles.pressItem}>
              <a
                href="https://www.researchstash.com/2018/01/11/seoul-based-nonprofit-wants-make-scholarly-communication-transparent-using-blockchain-technology/"
                target="_blank">
                <img src="https://assets.pluto.network/research-stash.png" />
              </a>
            </div>
            <div className={styles.pressItem}>
              <a
                href="https://btcmanager.com/can-blockchain-help-science/"
                target="_blank">
                <img src="https://assets.pluto.network/btcmanager.png" />
              </a>
            </div>
            <div className={styles.pressItem}>
              <a
                href="https://www.nature.com/articles/d41586-017-08589-4"
                target="_blank">
                <img src="https://assets.pluto.network/nature.png" />
              </a>
            </div>
            <div className={styles.pressItem}>
              <a
                href="http://physicstoday.scitation.org/do/10.1063/PT.6.1.20171201a/full/"
                target="_blank">
                <img src="https://assets.pluto.network/physics-today.png" />
              </a>
            </div>
            <div className={styles.pressItem}>
              <a
                href="http://derstandard.at/2000069965446/Peer-to-Peer-Wissenschaftsverlage-funktionieren-nicht-oder-doch"
                target="_blank">
                <img src="https://assets.pluto.network/derstandard.png" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(PressSection);
