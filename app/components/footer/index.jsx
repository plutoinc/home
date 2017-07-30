import React from 'react';
import Icon from '../icons';
// styles
import styles from './footer.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyRight}>
        ©Pluto. All Rights Reserved<br />
        team@pluto.network
      </div>
      <div className={styles.iconsWrapper}>
        <div className={styles.footerIconWrapper}>
          <Icon className={styles.footerIcon} icon="GITHUB" />
        </div>
        <div className={styles.footerIconWrapper}>
          <Icon className={styles.footerIcon} icon="REDDIT" />
        </div>
        <div className={styles.footerIconWrapper}>
          <Icon className={styles.footerIcon} icon="HIP_CHAT" />
        </div>
        <div className={styles.footerIconWrapper}>
          <Icon className={styles.footerIcon} icon="TWITTER" />
        </div>
        <div className={styles.footerIconWrapper}>
          <Icon className={styles.footerIcon} icon="MEDIUM" />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
