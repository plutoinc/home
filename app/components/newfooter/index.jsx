import React from "react";
import { Link } from "react-router";
import { trackLink, trackAction } from "../../helpers/handleGA";
import { WHITE_PAPER_ADDRESS, PRODUCT_URL } from "../../routes";
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
            © Copyright {new Date().getFullYear()} Pluto Network. <br />
            All rights reserved.
          </p>
        </div>

        <ul className={`${styles.ulSection} ${styles.resourceSection}`}>
          <li>Resources</li>
          <li>
            <Link to="/" onClick={() => trackAction("/", "Footer")}>
              Home
            </Link>
          </li>
          <li>
            <a
              href="https://medium.com/pluto-network"
              onClick={() =>
                trackLink("https://medium.com/pluto-network", "Footer")
              }
              target="_blank"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href={WHITE_PAPER_ADDRESS}
              onClick={() => trackLink(WHITE_PAPER_ADDRESS, "Footer")}
              target="_blank"
            >
              Whitepaper
            </a>
          </li>
        </ul>

        <ul className={`${styles.ulSection} ${styles.productSection}`}>
          <li>Product</li>
          <li>
            <a
              href={PRODUCT_URL}
              onClick={() => trackLink(PRODUCT_URL, "Footer")}
              target="_blank"
            >
              Scinapse
            </a>
          </li>
        </ul>

        <ul className={`${styles.ulSection} ${styles.followSection}`}>
          <li>Follow</li>
          <a
            href="https://www.facebook.com/Pluto-263226227503100/"
            onClick={() =>
              trackLink(
                "https://www.facebook.com/Pluto-263226227503100/",
                "Footer"
              )
            }
            target="_blank"
            className={styles.footerIconWrapper}
          >
            <Icon icon="FACEBOOK_FOOTER" />
          </a>
          <a
            href="https://medium.com/pluto-network"
            onClick={() =>
              trackLink("https://medium.com/pluto-network", "Footer")
            }
            target="_blank"
            className={styles.footerIconWrapper}
          >
            <Icon icon="MEDIUM_FOOTER" />
          </a>
          <a
            href="https://twitter.com/pluto_network"
            onClick={() =>
              trackLink("https://twitter.com/pluto_network", "Footer")
            }
            target="_blank"
            className={styles.footerIconWrapper}
          >
            <Icon icon="TWITTER_FOOTER" />
          </a>
          <a
            href="https://t.me/plutonetwork"
            onClick={() => trackLink("https://t.me/plutonetwork", "Footer")}
            target="_blank"
            className={styles.footerIconWrapper}
          >
            <Icon icon="TELEGRAM_FOOTER" />
          </a>
          <a
            href="https://github.com/pluto-net"
            onClick={() => trackLink("https://github.com/pluto-net", "Footer")}
            target="_blank"
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
