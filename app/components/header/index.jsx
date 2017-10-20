import React from "react";
import { Link } from "react-router";
import { trackAndOpenLink, trackAction } from "../../helpers/handleGA";
// styles
import styles from "./header.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../icons";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  render() {
    const { isTop } = this.props;
    return (
      <header
        className={`${styles.headerContainer} ${this.state.isMenuOpen ? styles.isOpen : ""} ${isTop
          ? styles.transparent
          : ""}`}
      >
        <div
          className={`${styles.menuListOverlay} ${this.state.isMenuOpen ? styles.isOpen : ""}`}
          onClick={this.toggleMobileMenu}
        />
        <div className={`${styles.innerContainer} `}>
          <Link to="/" className={styles.logoWrapper} onClick={() => trackAction("/", "Header")}>
            <Icon icon="LOGO" className={styles.desktopLogo} />
            <Icon icon="LOGO_ONLY" className={styles.mobileLogo} />
          </Link>

          <ul className={styles.menuList}>
            {/* <li className={styles.menuItem}>
              <a href="#">FAQ</a>
            </li> */}
            <li className={styles.menuItem}>
              <a onClick={() => trackAndOpenLink("https://medium.com/pluto-network", "Header")} target="_blank">
                Blog
              </a>
            </li>
            <li className={styles.menuItem}>
              <a onClick={() => trackAndOpenLink("https://github.com/pluto-net", "Header")} target="_blank">
                Github
              </a>
            </li>
            <li className={`${styles.menuItem} ${styles.whitePaperItem}`}>
              <a
                onClick={() =>
                  trackAndOpenLink("https://d2vo77dayzjoat.cloudfront.net/PLUTO_whitepaper_v0.2.pdf", "Header")}
              >
                White Paper
              </a>
            </li>
            {/* <li className={`${styles.menuItem} ${styles.langItem}`}>
              <a href="#">
                <Icon icon="LANG" />
                <span>EN</span>
              </a>
            </li> */}
          </ul>

          <div className={styles.mobileBtn} onClick={this.toggleMobileMenu}>
            <Icon icon="MOBILE_BTN_BLUE" className={styles.mobileIcon} />
            <Icon icon="CANCEL_BLUE" className={styles.cancelIcon} />
          </div>
        </div>
      </header>
    );
  }

  toggleMobileMenu() {
    const curState = this.state.isMenuOpen;
    this.setState({ isMenuOpen: !curState });
  }
}

export default withStyles(styles)(Header);
