import React from 'react';

// styles
import styles from "./achieveSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const FIRST_ITEM = 1;
const SECOND_ITEM = 2;
const THIRD_ITEM = 3;

class AchieveSection extends React.PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      activeItem: FIRST_ITEM,
    };
  }

  render () {
    return (
      <section className={styles.achieveSectionContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.subTitle}>WHAT WE ACHIEVE</div>
          <div className={styles.title}>
            PLUTO opens a new chapter in <strong>future academic society</strong>
          </div>

          <div className={styles.subSection}>
            <div
              className={`${styles.achieveItem} ${this.state.activeItem == FIRST_ITEM ? styles.active : ''}`}
              onClick={() => this.setState({ activeItem: FIRST_ITEM })}
            >
              <p className={styles.itemTitle}>
                Communication and collaboration <strong>in all phases</strong> of research
              </p>
              <p>
                Various forms of research achievements can be shared effectively, enabling communication and collaboration in all phases of research.
              </p>
            </div>

            <div
              className={`${styles.achieveItem} ${this.state.activeItem == SECOND_ITEM ? styles.active : ''}`}
              onClick={() => this.setState({ activeItem: SECOND_ITEM })}
            >
              <p className={styles.itemTitle}>
                <strong>Fair opportunities</strong> for researchers
              </p>
              <p>
                Alienated researchers are also given the opportunity to be recognized and reasonably funded so that they can contribute to the advancement of the scientific community.
              </p>
            </div>

            <div
              className={`${styles.achieveItem} ${this.state.activeItem == THIRD_ITEM ? styles.active : ''}`}
              onClick={() => this.setState({ activeItem: THIRD_ITEM })}
            >
              <p className={styles.itemTitle}>
                Research for science development, <strong>not for paper publication</strong>
              </p>
              <p>
                Since researchers can get away with the traditional research practices that are focused on simply increasing the number of papers, they can do research in true sense.
              </p>
            </div>

          </div>

          <div className={`${styles.subSection} ${styles.itemImageWrapper}`}>
            <img src="https://d2vo77dayzjoat.cloudfront.net/mokeup-1.png" alt="" className={`${styles.itemImage} ${this.state.activeItem == FIRST_ITEM ? styles.active : ''}`} />
            <img src="https://d2vo77dayzjoat.cloudfront.net/mokeup-2.png" alt="" className={`${styles.itemImage} ${this.state.activeItem == SECOND_ITEM ? styles.active : ''}`} />
            <img src="https://d2vo77dayzjoat.cloudfront.net/mokeup-3.png" alt="" className={`${styles.itemImage} ${this.state.activeItem == THIRD_ITEM ? styles.active : ''}`} />
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(AchieveSection);
