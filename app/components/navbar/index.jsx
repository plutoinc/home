import React from 'react';
import { Link } from 'react-router';
// styles
import styles from './navbar.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Icon from '../icons';

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { intl, isTop } = this.props;

    return (
      <nav className={`${styles.navbar} ${isTop ? styles.transparent : ''}`}>
        <div className={styles.container}>
          <Link className={styles.logo} to="/" >
            <Icon icon="PLUTO" />
          </Link>
          <div
            className={styles.mobileBtn}
            onClick={() => {
              const curIsOpen = this.state.isOpen;
              this.setState({ isOpen: !curIsOpen });
            }}
          >
            <Icon icon="MOBILE_BTN" />
          </div>
          <ul
            className={`${styles.menuList} ${this.state.isOpen ? styles.isOpen : ''}`}
          >
            <li>
              <Link className={styles.menuItem} to="/">
                {intl.formatMessage({ id: 'NAVBAR.whitePaper' })}
              </Link>
            </li>
            <li>
              <Link className={styles.menuItem} to="/">
                {intl.formatMessage({ id: 'NAVBAR.blog' })}
              </Link>
            </li>
            <li>
              <Link className={styles.menuItem} to="/">
                {intl.formatMessage({ id: 'NAVBAR.github' })}
              </Link>
            </li>
            <li>
              <Link className={styles.contributeBtn} to="/">
                {intl.formatMessage({ id: 'NAVBAR.contribute' })}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
