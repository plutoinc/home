import React from 'react';
import Slider from 'react-slick';
import ScholarCarouselItem from './scholarCarouselItem';
// styles
import styles from './scholarCarousel.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Icon from '../../../components/icons';

class ScholarCarousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render () {
    const settings = {
      dots: true,
      dotsClass: styles.carouselDots,
      arrows: false,
      infinite: true,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 5000,
      className: styles.carouselWrapper,
    };

    const { intl } = this.props;

    return (
      <div className={styles.sliderContainer}>
        <Slider ref={ref => this.slider = ref} {...settings}>
          <div>
            <ScholarCarouselItem
              imgUrl="https://d2vo77dayzjoat.cloudfront.net/randy-schekman-profile.jpg"
              author={intl.formatMessage({ id: 'ScholarCarousel.author1' })}
              description={intl.formatMessage({ id: 'ScholarCarousel.description1' })}
              bio={intl.formatMessage({ id: 'ScholarCarousel.bio1' })}
            />
          </div>
          <div>
            <ScholarCarouselItem
              imgUrl="https://d2vo77dayzjoat.cloudfront.net/julia-belluz.jpg"
              author={intl.formatMessage({ id: 'ScholarCarousel.author2' })}
              description={intl.formatMessage({ id: 'ScholarCarousel.description2' })}
              bio={intl.formatMessage({ id: 'ScholarCarousel.bio2' })}
            />
          </div>
          <div>
            <ScholarCarouselItem
              imgUrl="https://d2vo77dayzjoat.cloudfront.net/david-kent.jpg"
              author={intl.formatMessage({ id: 'ScholarCarousel.author3' })}
              description={intl.formatMessage({ id: 'ScholarCarousel.description3' })}
              bio={intl.formatMessage({ id: 'ScholarCarousel.bio3' })}
            />
          </div>
          <div>
            <ScholarCarouselItem
              imgUrl="https://d2vo77dayzjoat.cloudfront.net/jason-schmitt.jpg"
              author={intl.formatMessage({ id: 'ScholarCarousel.author4' })}
              description={intl.formatMessage({ id: 'ScholarCarousel.description4' })}
              bio={intl.formatMessage({ id: 'ScholarCarousel.bio4' })}
            />
          </div>
        </Slider>
        <div className={styles.prevBtn} onClick={this.previous}>
          <Icon icon="LEFT_ARROW" />
        </div>
        <div className={styles.nextBtn} onClick={this.next}>
          <Icon icon="RIGHT_ARROW" />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ScholarCarousel);
