import React from 'react';
// styles
import styles from './blogSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const BlogSection = () => {
  return (
    <div className={styles.blogSectionContainer}>
      <div className={styles.blogTitle}>
        최신 블로그 글
      </div>
      <div className={styles.blogCardWrapper}>
        <div className={styles.blogCard}>
          <img className={styles.blogImage} src="" />
          <div className={styles.content}>
            <div className={styles.blogCardTitle}>
              학술 논문 시장에서 파괴적 혁신의 필요성에 대하여
            </div>
            <div className={styles.blogCardDescription}>
              1995년, Forbes에서 (Elsevier, the largest publisher of scientific journals, would be “the internet’s first victim”) 라는 제목의 기사가 발...
            </div>
          </div>
        </div>
        <div className={styles.blogCard}>
          <img className={styles.blogImage} src="" />
          <div className={styles.content}>
            <div className={styles.blogCardTitle}>
              학술 논문 시장에서 파괴적 혁신의 필요성에 대하여
            </div>
            <div className={styles.blogCardDescription}>
              1995년, Forbes에서 (Elsevier, the largest publisher of scientific journals, would be “the internet’s first victim”) 라는 제목의 기사가 발...
            </div>
          </div>
        </div>
        <div className={styles.blogCard}>
          <img className={styles.blogImage} src="" />
          <div className={styles.content}>
            <div className={styles.blogCardTitle}>
              학술 논문 시장에서 파괴적 혁신의 필요성에 대하여
            </div>
            <div className={styles.blogCardDescription}>
              1995년, Forbes에서 (Elsevier, the largest publisher of scientific journals, would be “the internet’s first victim”) 라는 제목의 기사가 발...
            </div>
          </div>
        </div>
        <button className={styles.blogButton}>Pluto 블로그 바로가기</button>
      </div>
    </div>
  );
};

export default withStyles(styles)(BlogSection);