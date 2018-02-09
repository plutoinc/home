import React from "react";
import { trackAndOpenLink } from "../../../helpers/handleGA";
import VisibilitySensor from "react-visibility-sensor";
import { WHITE_PAPER_ADDRESS } from "../../../routes";
// styles
import styles from "./problemSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

class ProblemSection extends React.PureComponent {
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
        className={`${styles.problemSectionContainer} ${
          shown ? styles.shown : ""
        }`}>
        <div className={styles.innerContainer}>
          <div className={styles.contentsWrapper}>
            <div className={styles.subTitle}>Problem</div>
            <div className={styles.title}>
              Academia is Obsessed with Publications
            </div>
            <div className={styles.contents}>
              Scholarly communication is overwhelmed by commercial publishing
              companies. So is academia with publishing.
              <br /> <br /> Researchers are under pressure to publish more
              papers, and more publications means more profits for publishers,
              rather than genuine sciences.
            </div>
            <button
              onClick={() => trackAndOpenLink(WHITE_PAPER_ADDRESS)}
              className={styles.readMoreButton}>
              Read More
            </button>
          </div>
          <Icon icon="PROBLEM_ILLUST" />
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(ProblemSection);
