import React from "react";
import { trackAndOpen, trackAndOpenLink } from "../../../helpers/handleGA";
// styles
import styles from "./videoSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

class VideoSection extends React.PureComponent {
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
        }`}
      >
        <div className={styles.innerContainer}>
          <div className={styles.contentsWrapper}>
            <div className={styles.subTitle}>Video</div>
            <div className={styles.title}>Introducing Pluto</div>
            <div className={styles.contents}>
              Global research environment suffers under a distorted structure.
              Watch the infographic to see how Pluto's tackling the problems in
              scholarly communication.
            </div>
          </div>
          <div
            className={styles.videoWrapper}
            onClick={() =>
              trackAndOpenLink(
                "https://www.youtube.com/watch?v=t5R94Ah2Wgg&feature=youtu.be",
                "Video"
              )
            }
          />
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(VideoSection);
