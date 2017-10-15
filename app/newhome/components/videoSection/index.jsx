import React from 'react';
import ModalVideo from 'react-modal-video';

// styles
import styles from "./videoSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

class VideoSection extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isVideoOpen: false,
    };
    this.openVideoModal = this.openVideoModal.bind(this);
  }

  render () {
    return (
      <section className={styles.videoSectionContainer}>
        <div className={styles.innerContainer}>
          <ModalVideo channel='youtube' isOpen={this.state.isVideoOpen} videoId='7wtfhZwyrcc' onClose={() => this.setState({isVideoOpen: false})} />
          <div className={styles.videoBtn} onClick={this.openVideoModal}>
            <img src="https://img.youtube.com/vi/7wtfhZwyrcc/maxresdefault.jpg" alt=""/>
            <span className={styles.playBtn}>PLAY</span>
          </div>
        </div>
      </section>
    );
  }

  openVideoModal () {
    this.setState({ isVideoOpen: true });
  }
}

export default withStyles(styles)(VideoSection);
