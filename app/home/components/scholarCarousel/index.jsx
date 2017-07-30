import React from 'react';
import Slider from 'react-slick';
import ScholarCarouselItem from './scholarCarouselItem';
// styles
import styles from './scholarCarousel.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const ScholarCarousel = () => {
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
          author="RANDY SCHEKMAN"
          description="저는 제가 노벨상을 받을 수 있게 만든 논문을 포함하여 주요 학술지에 논문을 출판해왔습니다. 하지만 더이상은 아닙니다. 월스트리트가 보너스 문화를 깨뜨릴 필요가 있는 것처럼, 과학은 귀족 저널의 가혹한 행위를 깨버려야 합니다."
          bio="생명과학/약학 분야 노벨상 수상자 "
        />
      </div>
      <div>
        <ScholarCarouselItem
          author="Tylor Shin"
          description="AWESOME"
          bio="Enginner"
        />
      </div>
      <div>
        <ScholarCarouselItem
          author="daskjfksjf"
          description="AWESOME"
          bio="Enginner"
        />
      </div>
      <div>
        <ScholarCarouselItem
          author="dsl;kcvfl;kvdzx"
          description="AWESOME"
          bio="Enginner"
        />
      </div>
    </Slider>
  );
};

export default withStyles(styles)(ScholarCarousel);
