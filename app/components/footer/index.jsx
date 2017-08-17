import React from 'react';
import Icon from '../icons';
// styles
import styles from './footer.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerContainer}>
        <div className={styles.copyRight}>
          ©Pluto. All Rights Reserved<br />
          team@pluto.network
        </div>
        <div className={styles.iconsWrapper}>
          <a href="https://github.com/pluto-net" target="_blank" className={styles.footerIconWrapper}>
            <Icon icon="GITHUB" />
          </a>
          <a href="/" className={styles.footerIconWrapper}>
            <Icon icon="REDDIT" />
          </a>
          <a href="/" className={styles.footerIconWrapper}>
            <Icon icon="TWITTER" />
          </a>
          <a href="https://medium.com/pluto-network" target="_blank" className={styles.footerIconWrapper}>
            <Icon icon="MEDIUM" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
