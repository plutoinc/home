import React from "react";
import { trackAndOpenLink } from "../../../helpers/handleGA";
import VisibilitySensor from "react-visibility-sensor";
// styles
import styles from "./productSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

class ProductSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      itemShown: false,
    };
  }
  render() {
    const { shown } = this.props;
    return (
      <section className={`${styles.productSectionContainer} ${shown ? styles.shown : ""}`}>
        <div className={styles.innerContainer}>
          <div className={styles.mokeupContainer}>
            <img src="https://s3.amazonaws.com/pluto-asset/poc-mockup.png" />
          </div>
          <div className={styles.contentsWrapper}>
            <div className={styles.subTitle}>Product</div>
            <div className={styles.title}>
              <b>Try Pluto's prototype :</b>
              <br />
              Discover research papers,<br />
              and put your own review.
            </div>

            <button onClick={() => trackAndOpenLink("https://poc.pluto.network")} className={styles.getStartedButton}>
              Try Beta
            </button>
            <div className={styles.oval_1}>
              <Icon icon="WP_OVAL" />
            </div>
            <div className={styles.oval_2}>
              <Icon icon="WP_OVAL" />
            </div>
            <div className={styles.oval_3}>
              <Icon icon="WP_OVAL" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(ProductSection);
