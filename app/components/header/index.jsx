import React from "react";
import { Link } from "react-router";
import { trackLink, trackAction } from "../../helpers/handleGA";
import { WHITE_PAPER_ADDRESS, PRODUCT_URL } from "../../routes";
// styles
import styles from "./header.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../icons";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  render() {
    const { isTop } = this.props;
    return (
      <header
        className={`${styles.headerContainer} ${
          this.state.isMenuOpen ? styles.isOpen : ""
        } ${isTop ? styles.transparent : ""}`}
      >
        <div
          className={`${styles.menuListOverlay} ${
            this.state.isMenuOpen ? styles.isOpen : ""
          }`}
          onClick={this.toggleMobileMenu}
        />
        <div className={`${styles.innerContainer} `}>
          <Link
            to="/"
            className={styles.logoWrapper}
            onClick={() => trackAction("/", "Header")}
          >
            <Icon icon="LOGO" className={styles.desktopLogo} />
          </Link>

          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link to="/faq" onClick={() => trackAction("/faq", "Header")}>
                FAQ
              </Link>
            </li>

            <li className={styles.menuItem}>
              <a
                href={WHITE_PAPER_ADDRESS}
                onClick={() => tracknLink(WHITE_PAPER_ADDRESS, "Header")}
                target="_blank"
              >
                Whitepaper
              </a>
            </li>

            <li className={styles.menuItem}>
              <a
                href="https://medium.com/pluto-network"
                onClick={() =>
                  trackLink("https://medium.com/pluto-network", "Header")
                }
                target="_blank"
              >
                Blog
              </a>
            </li>

            <li className={styles.menuItem}>
              <a
                href="https://github.com/pluto-net"
                onClick={() =>
                  trackLink("https://github.com/pluto-net", "Header")
                }
                target="_blank"
              >
                Github
              </a>
            </li>

            <li className={`${styles.menuItem} ${styles.demoItem}`}>
              <a
                href={PRODUCT_URL}
                onClick={() => trackLink(PRODUCT_URL, "Header")}
                target="_blank"
              >
                Our Product
              </a>
            </li>
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
