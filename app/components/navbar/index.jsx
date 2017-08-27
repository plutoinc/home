import React from "react";
import { Link } from "react-router";
// styles
import styles from "./navbar.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../icons";
// tooltip
import ReactTooltip from "react-tooltip";

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.getLocaleButton = this.getLocaleButton.bind(this);

    this.state = {
      isMobileOpen: false,
    };
  }

  render() {
    const { intl, isTop } = this.props;

    return (
      <nav
        className={`${styles.navbar} ${isTop ? styles.transparent : ""} ${this.state.isMobileOpen
          ? styles.isMobileOpen
          : ""}`}
      >
        <div
          onClick={() => {
            const curOpen = this.state.isMobileOpen;
            this.setState({ isMobileOpen: !curOpen });
          }}
          className={`${styles.menuListOverlay} ${this.state.isMobileOpen ? styles.isMobileOpen : ""}`}
        />
        <div className={styles.container}>

          <ul className={`${styles.menuList} ${this.state.isMobileOpen ? styles.isMobileOpen : ""}`}>
            <li>
              <a style={{ cursor: 'pointer' }} data-tip={intl.formatMessage({ id: "NAVBAR.whitepaper_tooltip" })} className={styles.menuItem}>
                {intl.formatMessage({ id: "NAVBAR.whitePaper" })}
              </a>
              <ReactTooltip
                effect="solid"
              />
            </li>
            <li>
              <a className={styles.menuItem} href="https://medium.com/pluto-network" target="_blank">
                {intl.formatMessage({ id: "NAVBAR.blog" })}
              </a>
            </li>
            <li>
              <a className={styles.menuItem} href="https://github.com/pluto-net" target="_blank">
                {intl.formatMessage({ id: "NAVBAR.github" })}
              </a>
            </li>
            {/* <li>
              <Link className={styles.contributeBtn} to="/">
                {intl.formatMessage({ id: 'NAVBAR.contribute' })}
              </Link>
            </li> */}
            <li className={styles.langItem}>
              {this.getLocaleButton()}
            </li>
          </ul>

          <Link className={styles.logo} to="/">
            <Icon icon="NEW_LOGO" />
          </Link>

          <ul className={`${styles.snsBtnList} ${this.state.isMobileOpen ? styles.isMobileOpen : ''}`}>
            <li className={styles.langItem}>
              {this.getLocaleButton()}
            </li>
            <li>
              <a className={styles.menuItem} href="https://www.facebook.com/Pluto-263226227503100/" target="_blank">
                <Icon icon="FACEBOOK_COLOR" />
              </a>
            </li>
            <li>
              <a className={styles.menuItem} href="#" target="_blank">
                <Icon icon="TELEGRAM_COLOR" />
              </a>
            </li>
            <li>
              <a className={styles.menuItem} href="https://twitter.com/pluto_network" target="_blank">
                <Icon icon="TWITTER_COLOR" />
              </a>
            </li>
          </ul>

          <div
            className={styles.mobileBtn}
            onClick={() => {
              const curOpen = this.state.isMobileOpen;
              this.setState({ isMobileOpen: !curOpen });
            }}
          >
            <Icon icon="MOBILE_BTN" className={styles.mobileIcon} />
            <Icon icon="CANCEL" className={styles.cancelIcon} />
          </div>
        </div>
      </nav>
    );
  }

  getLocaleButton() {
    const { intl, handleLocaleChange } = this.props;
    const curLocale = intl.locale;
    const nextLocale = curLocale === 'en' ? 'ko' : 'en';

    return (
      <div
        onClick={() => {
          handleLocaleChange(nextLocale);
        }}
        className={styles.langBtn}
      >
        {/* <img src="https://d2vo77dayzjoat.cloudfront.net/language-change.png" /> */}
        <span className={curLocale === 'en' ? styles.active : styles.notActive}>EN</span> | <span className={curLocale === 'ko' ? styles.active : styles.notActive}>KO</span>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
