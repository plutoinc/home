import React from 'react';
import Slider from 'react-slick';

// styles
import styles from "./problemSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

class ProblemSection extends React.PureComponent {
  render () {
    const settings = {
      dots: true,
      infinite: false,
      arrows: false,
      autoplay: false,
      draggable: true,
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      className: styles.sliderContainer,
      dotsClass: styles.sliderDots,
    };

    return (
      <section className={styles.problemSectionContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.subTitle}>PROBLEM</div>
          <div className={styles.title}>
            <strong>Research resources</strong> for scientific development are being <strong>wasted</strong><br />
            due to <strong>ineffective</strong> academic communications.
          </div>
        </div>

        <Slider {...settings}>
          <div className={styles.sliderItem}>
            <div className={styles.iconWrapper}>
              <Icon icon="PROBLEM_1" />
            </div>
            <div className={styles.itemText}>
              Labs are paying a significant portion of their research funds to academic publishers.
            </div>
          </div>
          <div className={styles.sliderItem}>
            <div className={styles.iconWrapper}>
              <Icon icon="PROBLEM_2" />
            </div>
            <div className={styles.itemText}>
              This is because academic publishers demand high subscription and publication fees based on their past influence.
            </div>
          </div>
          <div className={styles.sliderItem}>
            <div className={styles.iconWrapper}>
              <Icon icon="PROBLEM_3" />
            </div>
            <div className={styles.itemText}>
              Nonetheless, academic publishers are not doing their jobs properly, such as passing hundreds of fake reviews.
            </div>
          </div>
          <div className={styles.sliderItem}>
            <div className={styles.iconWrapper}>
              <Icon icon="PROBLEM_4" />
            </div>
            <div className={styles.itemText}>
              Rather, they give researchers unnecessary procedures and make them spend excessive resources to share research results.
            </div>
          </div>
        </Slider>

        <div className={styles.catchPhraseContainer}>
          <Icon icon="WAVE_LINE" />
          <div className={styles.catchPhrase}>
            PLUTO makes Scholarly Communication Reasonable and Transparent, <br />
            independent from Capital, Authority, and Centralization.
          </div>
        </div>

      </section>
    );
  }
}

export default withStyles(styles)(ProblemSection);
