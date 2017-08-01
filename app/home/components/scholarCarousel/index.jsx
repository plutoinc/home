import React from 'react';
import Slider from 'react-slick';
import ScholarCarouselItem from './scholarCarouselItem';
// styles
import styles from './scholarCarousel.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const ScholarCarousel = ({ intl }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    className: styles.carouselWrapper,
  };
  return (
    <Slider {...settings}>
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
  );
};

export default withStyles(styles)(ScholarCarousel);
