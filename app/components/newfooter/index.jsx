import React from 'react';
import { Link } from "react-router";
// styles
import styles from './footer.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Icon from '../icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerContainer}>
        <div className={styles.logoSection}>
          <Icon icon="FOOTER_LOGO" />
          <p>
            Copyright © 2017 Pluto Network. <br />
            All rights reserved.
          </p>
        </div>

        <ul className={`${styles.ulSection} ${styles.plutoSection}`}>
          <li>
            Pluto
          </li>
          <li>
            <Link to="/newhome">Home</Link>
          </li>
          {/* <li>
            <a href="#">About us</a>
          </li> */}
        </ul>

        <ul className={`${styles.ulSection} ${styles.resourceSection}`}>
          <li>
            Resources
          </li>
          <li>
            <a href="https://medium.com/pluto-network" target="_blank">Blog</a>
          </li>
          <li>
            <a href="#">Whitepaper</a>
          </li>
        </ul>

        <ul className={`${styles.ulSection} ${styles.followSection}`}>
          <li>Follow</li>
          <a href="#" target="_blank" className={styles.footerIconWrapper}>
            <Icon icon="FACEBOOK_FOOTER" />
          </a>
          <a href="https://medium.com/pluto-network" target="_blank" className={styles.footerIconWrapper}>
            <Icon icon="MEDIUM_FOOTER" />
          </a>
          <a href="https://twitter.com/pluto_network" target="_blank" className={styles.footerIconWrapper}>
            <Icon icon="TWITTER_FOOTER" />
          </a>
          {/* <a href="#" target="_blank" className={styles.footerIconWrapper}>
            <Icon icon="TELEGRAM_FOOTER" />
          </a> */}
          <a href="https://github.com/pluto-net" target="_blank" className={styles.footerIconWrapper}>
            <Icon icon="GITHUB_FOOTER" />
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
