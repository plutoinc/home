import React from "react";
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
            onClick={() => this.setState({ isVideoOpen: true })}
          >
            <iframe
              id="ytplayer"
              type="text/html"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/t5R94Ah2Wgg?rel=0"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(VideoSection);
