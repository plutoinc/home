import React from 'react';
import Icon from '../../../components/icons';
// styles
import styles from './scholarCarouselItem.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const ScholarCarouselItem = ({ author, description, bio }) => {
  return (
    <div className={styles.carouselItemWrapper}>
      <div className={styles.userImgWrapper}>
        <img className={styles.userImg} src="https://d2vo77dayzjoat.cloudfront.net/randy-schekman-profile.jpg" />
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.doubleQuotationWrapper}>
          <Icon className={styles.doubleQuotation} icon="DOUBLE_QUOTATION" />
        </div>
        <div className={styles.description}>
          {description}
        </div>
        <span className={styles.authorInfo}>{`${author},`}</span>
        <span className={styles.bioInfo}>{bio}</span>
      </div>
    </div>
  );
};

export default withStyles(styles)(ScholarCarouselItem);
