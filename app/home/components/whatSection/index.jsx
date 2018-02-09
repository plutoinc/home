import React from "react";
import { trackAndOpenLink } from "../../../helpers/handleGA";
import VisibilitySensor from "react-visibility-sensor";
// styles
import styles from "./whatSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

class WhatSection extends React.PureComponent {
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
        className={`${styles.whatSectionContainer} ${
          shown ? styles.shown : ""
        }`}
      >
        <div className={styles.innerContainer}>
          <div className={styles.subTitle}>What Pluto Does</div>
          <div className={styles.title}>
            Scholarly Communication <br /> for Researchers, Powered by
            Researchers
          </div>
          <div className={styles.featureWrapper}>
            <div className={styles.featureItem}>
              <Icon icon="WHAT_ITEM_1" />
              <p className={styles.itemTitle}>Autonomy & Decentralization</p>
              <p className={styles.itemDetail}>
                Scholarly communication on Pluto is governed by researchers, and
                no single individual or group has control of the system.
              </p>
            </div>
            <div className={styles.featureItem}>
              <Icon icon="WHAT_ITEM_2" />
              <p className={styles.itemTitle}>Collaborations & Incentives</p>
              <p className={styles.itemDetail}>
                Researchers on Pluto are encouraged to actively share their
                information, and put reviews on peers' works. Any forms of
                academic activities on Pluto are properly compensated.
              </p>
            </div>
            <div className={styles.featureItem}>
              <Icon icon="WHAT_ITEM_3" />
              <p className={styles.itemTitle}>Open & Transparent</p>
              <p className={styles.itemDetail}>
                Pluto makes scholarly communication as transparent as possible.
                Information is kept clearly visible to anybody, and publishing
                and reviewing processes are transparent and open to users.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(WhatSection);
