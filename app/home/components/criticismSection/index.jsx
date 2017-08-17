import React from 'react';
import Icon from '../../../components/icons';
// styles
import styles from './criticismSection.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const CriticismSection = ({ intl }) => {
    return (
      <div className={styles.criticismSection}>
        <div className={`container ${styles.innerContainer}`}>
          <div className={styles.smallTitle}>PROBLEM</div>
          <h1 className={styles.headline}>
            {intl.formatMessage({ id: 'criticismSection.title' })}
          </h1>
          <h2 className={styles.subTitle}>
            {intl.formatMessage({ id: 'criticismSection.subTitle' })}
          </h2>
          <ul className={`row ${styles.cardItemWrapper}`}>
            <li className={`col-md-4 col-xs-12 ${styles.card}`}>
              <Icon className={styles.cardItemIcon} icon="INCREASING_REVENUE" />
              <div className={styles.cardTitle}>{intl.formatMessage({ id: 'criticismSection.cardTitle1' })}</div>
              <div className={styles.cardDescription}>
                {intl.formatMessage({ id: 'criticismSection.cardDescription1' })}
              </div>
            </li>
            <li className={`col-md-4 col-xs-12 ${styles.card}`}>
              <Icon className={styles.cardItemIcon} icon="RACK_OF_TRUST" />
              <div className={styles.cardTitle}>{intl.formatMessage({ id: 'criticismSection.cardTitle2' })}</div>
              <div className={styles.cardDescription}>
                {intl.formatMessage({ id: 'criticismSection.cardDescription2' })}
              </div>
            </li>
            <li className={`col-md-4 col-xs-12 ${styles.card}`}>
              <Icon className={styles.cardItemIcon} icon="RESOURCE_COST" />
              <div className={styles.cardTitle}>{intl.formatMessage({ id: 'criticismSection.cardTitle3' })}</div>
              <div className={styles.cardDescription}>
                {intl.formatMessage({ id: 'criticismSection.cardDescription3' })}
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default withStyles(styles)(CriticismSection);
