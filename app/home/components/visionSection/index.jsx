import React from "react";
import { trackAndOpenLink } from "../../../helpers/handleGA";
import VisibilitySensor from "react-visibility-sensor";
// styles
import styles from "./visionSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

class VisionSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      itemShown: false,
    };
  }
  render() {
    const { shown } = this.props;
    return (
      <section className={`${styles.visionSectionContainer} ${shown ? styles.shown : ""}`}>
        <div className={styles.innerContainer}>
          <div className={styles.subTitle}>Our Vision</div>
          <div className={styles.title}>
            To break down<br />the barriers in academia
          </div>
          <div className={styles.contents}>
            Centralized scholarly communication is one of the absurd obstacles in research community.<br />
            Beginning with decentralizing it, Pluto aims to remove any barriers in science,<br />
            to enable anyone to fully realize potential as a scientist, and to accelerate the advancement of science.
          </div>
        </div>
        <Icon icon="BREAKDOWN" />
      </section>
    );
  }
}

export default withStyles(styles)(VisionSection);
