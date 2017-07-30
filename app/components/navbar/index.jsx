import React from 'react';
import { Link } from 'react-router';
// styles
import styles from './navbar.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Navbar = () => (
  <nav className={`navbar navbar-default navbar-fixed-top ${styles.navbar}`}>
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#pluto-main-navbar" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link
          style={{
            display: 'inline-block',
            verticalAlign: 'top',
            fontSize: '18px',
            color: '#fff',
          }}
          className={`navbar-brand ${styles.logo}`}
          to="/"
        >
          PLUTO
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="pluto-main-navbar">
        <ul className="nav navbar-nav navbar-right">
          <li><Link style={{ color: '#fff' }} to="/">백서</Link></li>
          <li><Link style={{ color: '#fff' }} to="/">블로그</Link></li>
          <li><Link style={{ color: '#fff' }} to="/">깃헙</Link></li>
          <li>
            <Link
              style={{
                color: '#fff',
                width: '140px',
                height: '42px',
                lineHeight: '42px',
                borderRadius: '4px',
                backgroundColor: '#172649',
                marginTop: '4px',
                padding: 0,
                textAlign: 'center',
              }}
              to="/"
            >
              기여하기
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );

export default withStyles(styles)(Navbar);
