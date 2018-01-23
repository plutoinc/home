import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { trackAndOpenLink } from "../../../helpers/handleGA";
import { WHITE_PAPER_ADDRESS } from "../../../routes";
// styles
import styles from "./workSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

class WorkSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      itemShown: false,
    };
  }
  render() {
    const { shown } = this.props;
    return (
      <section className={`${styles.workSectionContainer} ${shown ? styles.shown : ""}`}>
        <div className={styles.innerContainer}>
          <div className={styles.subTitle}>How Pluto Works</div>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>Blockchain Technology takes Scholarly Communication to Whole New Level</div>
            <div className={styles.whitepaperWrapper}>
              <Icon icon="WP_OVAL" />
              <a
                onClick={() =>
                  trackAndOpenLink(
                    "https://assets.pluto.network/Pluto_white_paper_v04_180108_2130_BSH.pdf",
                    "WorkSection",
                  )
                }
                className={styles.wpBtn}
              >
                Read White Paper
                <Icon icon="WP_ARROW" />
              </a>
            </div>
          </div>

          <div className={styles.featureWrapper}>
            <div className={styles.featureItem}>
              <Icon icon="FEATURE_1" />
              <p className={styles.itemTitle}>Contribution & Reputation</p>
              <p className={styles.itemDetail}>
                Any academic activities on Pluto, including peer-reviews, are transparently recorded on public
                blockchain ledgers, and depending on the contribution made with them, researchers are compensated with
                their reputations.
              </p>
            </div>
            <div className={styles.featureItem}>
              <Icon icon="FEATURE_2" />
              <p className={styles.itemTitle}>Decentralized Publishing</p>
              <p className={styles.itemDetail}>
                Any academic activities on Pluto, including peer-reviews, are transparently recorded on public
                blockchain ledgers, and depending on the contribution made with them, researchers are compensated with
                their reputations.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(WorkSection);
