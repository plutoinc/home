import React from "react";
import { Link } from "react-router";
// styles
import styles from "./header.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../icons";

class Header extends React.PureComponent {
  render() {
    return (
      <header className={styles.headerContainer} >
        <div className={styles.innerContainer}>
          <Link to="/newhome" className={styles.logoWrapper}>
            <Icon icon="LOGO" />
          </Link>

          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <a href="#">FAQ</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#">Blog</a>
            </li>
            <li className={styles.menuItem}>
              <a href="#">Github</a>
            </li>
            <li className={`${styles.menuItem} ${styles.whitePaperItem}`}>
              <a href="#">White Paper</a>
            </li>
            <li className={`${styles.menuItem} ${styles.langItem}`}>
              <a href="#">
                <Icon icon="LANG" />
                <span>EN</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default withStyles(styles)(Header);
