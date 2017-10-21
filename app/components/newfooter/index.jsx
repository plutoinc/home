import React from "react";
import { Link } from "react-router";
import { trackAndOpenLink, trackAction } from "../../helpers/handleGA";
// styles
import styles from "./footer.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../icons";

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
          <li>Pluto</li>
          <li>
            <Link to="/" onClick={() => trackAction("/", "Footer")}>
              Home
            </Link>
          </li>
          {/* <li>
            <a href="#">About us</a>
          </li> */}
        </ul>

        <ul className={`${styles.ulSection} ${styles.resourceSection}`}>
          <li>Resources</li>
          <li>
            <a onClick={() => trackAndOpenLink("https://medium.com/pluto-network", "Footer")}>Blog</a>
          </li>
          <li>
            <a
              onClick={() =>
                trackAndOpenLink("https://d2vo77dayzjoat.cloudfront.net/PLUTO_whitepaper_ver_0.2.pdf", "Footer")}
            >
              Whitepaper
            </a>
          </li>
        </ul>

        <ul className={`${styles.ulSection} ${styles.followSection}`}>
          <li>Follow</li>
          <a
            onClick={() => trackAndOpenLink("https://www.facebook.com/Pluto-263226227503100/", "Footer")}
            className={styles.footerIconWrapper}
          >
            <Icon icon="FACEBOOK_FOOTER" />
          </a>
          <a
            onClick={() => trackAndOpenLink("https://medium.com/pluto-network", "Footer")}
            className={styles.footerIconWrapper}
          >
            <Icon icon="MEDIUM_FOOTER" />
          </a>
          <a
            onClick={() => trackAndOpenLink("https://twitter.com/pluto_network", "Footer")}
            className={styles.footerIconWrapper}
          >
            <Icon icon="TWITTER_FOOTER" />
          </a>
          <a
            onClick={() => trackAndOpenLink("https://t.me/plutonetwork", "Footer")}
            className={styles.footerIconWrapper}
          >
            <Icon icon="TELEGRAM_FOOTER" />
          </a>
          <a
            onClick={() => trackAndOpenLink("https://github.com/pluto-net", "Footer")}
            className={styles.footerIconWrapper}
          >
            <Icon icon="GITHUB_FOOTER" />
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
