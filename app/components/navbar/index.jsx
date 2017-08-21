import React from 'react';
import { Link } from 'react-router';
// styles
import styles from './navbar.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Icon from '../icons';
// change lang action
import { changeLocale } from '../connectedIntlProvider/actions';

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isMobileOpen: false,
      isLangOpen: false,
    };
  }

  render() {
    const { intl, isTop } = this.props;
    const localeIsEn = intl.locale === 'en';

    return (
      <nav className={`${styles.navbar} ${isTop ? styles.transparent : ''} ${this.state.isMobileOpen ? styles.isMobileOpen : ''}`}>
        <div className={styles.container}>
          <Link className={styles.logo} to="/" >
            <Icon icon="PLUTO" />
          </Link>
          <div
            className={styles.mobileBtn}
            onClick={() => {
              const d = this.state.isMobileOpen;
              this.setState({ isMobileOpen: !d });
            }}
          >
            <Icon icon="MOBILE_BTN" className={styles.mobileIcon} />
            <Icon icon="CANCEL" className={styles.cancelIcon} />
          </div>
          <ul
            className={`${styles.menuList} ${this.state.isMobileOpen ? styles.isMobileOpen : ''}`}
          >
            <li>
              <Link className={styles.menuItem} to="/">
                {intl.formatMessage({ id: 'NAVBAR.whitePaper' })}
              </Link>
            </li>
            <li>
              <a className={styles.menuItem} href="https://medium.com/pluto-network" target="_blank">
                {intl.formatMessage({ id: 'NAVBAR.blog' })}
              </a>
            </li>
            <li>
              <a className={styles.menuItem} href="https://github.com/pluto-net" target="_blank">
                {intl.formatMessage({ id: 'NAVBAR.github' })}
              </a>
            </li>
            {/* <li>
              <Link className={styles.contributeBtn} to="/">
                {intl.formatMessage({ id: 'NAVBAR.contribute' })}
              </Link>
            </li> */}
            <li className={styles.langItem}>
              <div
                className={styles.langBtn}
                onClick={() => {
                  const curOpen = this.state.isLangOpen;
                  this.setState({ isLangOpen: !curOpen });
                }}
              >
                <img src="https://d2vo77dayzjoat.cloudfront.net/language-change.png" />
              </div>
              <ul className={`${styles.langList} ${this.state.isLangOpen ? styles.isLangOpen : ''}`}>
                <li
                  className={localeIsEn ? styles.active : ''}
                  onClick={() => console.log('sdf')}
                >
                  EN
                </li>
                <li
                  className={localeIsEn ? '' : styles.active}
                  onClick={() => console.log('asdf')}
                >
                  KO
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
