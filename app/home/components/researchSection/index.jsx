import React from 'react';
// styles
import styles from './researchSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const ResearchSection = () => {
  return (
    <div className={styles.researchSectionContainer}>
      <div className={styles.container}>
        <div className={styles.title}>
          연구 성과 공유에 드는 자원을 줄여야,<br />
          더 많은 시간과 비용을 연구에 투자할 수 있습니다.
        </div>
        <ul className={styles.effectWrapper}>
          <div className={styles.row}>
            <li className={styles.effectItem}>
              <img
                className={styles.effectItemImage}
                src="https://d2vo77dayzjoat.cloudfront.net/effect-icon-1.jpg"
              />
              <div className={styles.effectItemTitle}>
                리뷰 퀄리티 향상
              </div>
              <div className={styles.effectItemDescription}>
                리뷰 수행에 대한 평판 점수 반영 시스템으로 리뷰가 질적으로 향상되고 남용이 방지 됩니다.
              </div>
            </li>
            <li className={styles.effectItem}>
              <img
                className={styles.effectItemImage}
                src="https://d2vo77dayzjoat.cloudfront.net/effect-icon-2.jpg"
              />
              <div className={styles.effectItemTitle}>
                개제 시간 단축
              </div>
              <div className={styles.effectItemDescription}>
                각종 불필요한 절차의 생략으로 논문 게재 까지 걸리는 시간을 획기적으로 줄입니다.
              </div>
            </li>
          </div>
          <div className={styles.row}>
            <li className={styles.effectItem}>
              <img
                className={styles.effectItemImage}
                src="https://d2vo77dayzjoat.cloudfront.net/effect-icon-3.jpg"
              />
              <div className={styles.effectItemTitle}>
                합리적인 비용
              </div>
              <div className={styles.effectItemDescription}>
                저자는 자신이 설정한 심사비용만을 지불하기 때문에 낮은 비용으로 연구 성과 공유가 가능합니다.
              </div>
            </li>
            <li className={styles.effectItem}>
              <img
                className={styles.effectItemImage}
                src="https://d2vo77dayzjoat.cloudfront.net/effect-icon-4.jpg"
              />
              <div className={styles.effectItemTitle}>
                효과적인 공유
              </div>
              <div className={styles.effectItemDescription}>
                동종 분야에 관심을 가지는 모두에게 공개가 가능하기때문에 보다 넓은 범위의 배포가 가능합니다.
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default withStyles(styles)(ResearchSection);
