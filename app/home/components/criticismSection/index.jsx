import React from 'react';
import Icon from '../../../components/icons';
// styles
import styles from './criticismSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const CriticismSection = () => {
    return (
      <div className={styles.criticismSection}>
        <div className="container">
          <h1 className={styles.headline}>
            현재 학술 커뮤니케이션의 비효율성은 영향력을 가진 중앙화된 구조에서 시작되었습니다.
          </h1>
          <h2 className={styles.subTitle}>
            인터넷이라는 매개가 없었던 과거와 달리 학술 저널 시스템이 연구자에게 부가가치를 제공하지 않음에도 불구하고 <br />
            학술 저널 출판사들은 여전히 과거 지면을 통해 구축해온 저널 유통 채널의 영향력을 이용하여 과다한 수익을 창출하고 있습니다.
          </h2>
          <ul className={`row ${styles.cardItemWrapper}`}>
            <li className={`col-md-4 ${styles.card}`}>
              <Icon className={styles.cardItemIcon} icon="INCREASING_REVENUE" />
              <div className={styles.cardTitle}>과도한 상업적 수익 창출</div>
              <div className={styles.cardDescription}>
                현재 학술 출판사는 구독료, 투고료, APC, 추가 옵션비 등 각종 비합리적인 비즈니스 모델로 연구비용의 큰 비율을 지불하게 합니다. 현재 시장을 독점하고 있는 주요 출판사는 영업이익율이 37%에 달할 정도로 과다한 상업적 수익을 취하고 있습니다.
              </div>
            </li>
            <li className={`col-md-4 ${styles.card}`}>
              <Icon className={styles.cardItemIcon} icon="RACK_OF_TRUST" />
              <div className={styles.cardTitle}>리뷰 신뢰성 결여</div>
              <div className={styles.cardDescription}>
                연구자는 논문심사 비용으로 많은 금액을 지불하지만 그에 합당한 심사를 받지 못하고 있습니다. 에디터가 동료 리뷰어를 선정할시 명확한 기준이 없어 전문성이 없는 리뷰어가 선정되는 경우가 있고, 리뷰 조작 사건도 빈번히 발생하고 있습니다.
              </div>
            </li>
            <li className={`col-md-4 ${styles.card}`}>
              <Icon className={styles.cardItemIcon} icon="RESOURCE_COST" />
              <div className={styles.cardTitle}>불필요한 자원 소모</div>
              <div className={styles.cardDescription}>
                논문을 엄격한 형식에 맞추어 기고하는 것으로 시작하여, 심사를 진행하는 출판사의 에디터와의 커뮤니케이션, 그리고 3개월에서 길게는 1년까지 소요되는 심사 기간은 연구자의 정신적, 시간적 자원을 과다하게 소요시킵니다.
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default withStyles(styles)(CriticismSection);
