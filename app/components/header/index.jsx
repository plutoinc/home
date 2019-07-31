import React from "react";
import { Link } from "react-router";
import { trackAction } from "../../helpers/handleGA";
// styles
import styles from "./header.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../icons";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      currentCategory: ""
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
              <Link
                to="/product"
                onClick={() => trackAction("/product", "Header")}
              >
                Product
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link
                to="/solution"
                onClick={() => trackAction("/faq", "Header")}
              >
                Solution
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link to="/faq" onClick={() => trackAction("/faq", "Header")}>
                About us
              </Link>
            </li>

            <li className={styles.menuItem}>
              <Link
                to="/contact"
                onClick={() => trackAction("/contact", "Header")}
              >
                Contact us
              </Link>
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
