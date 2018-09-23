import React from "react";
import ModalVideo from "react-modal-video";

// styles
import styles from "./videoSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";

class VideoSection extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      itemShown: false,
      isVideoOpen: false
    };
    this.openVideoModal = this.openVideoModal.bind(this);
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
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isVideoOpen}
            videoId="t5R94Ah2Wgg"
            onClose={() => this.setState({ isVideoOpen: false })}
          />
          <div
            className={styles.videoWrapper}
            onClick={() => this.setState({ isVideoOpen: true })}
          />
        </div>
      </section>
    );
  }

  openVideoModal() {
    this.setState({ isVideoOpen: true });
  }
}

export default withStyles(styles)(VideoSection);
