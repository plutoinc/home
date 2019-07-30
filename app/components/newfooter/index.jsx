import React from "react";
// styles
import styles from "./footer.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerContainer}>
        <p>© Copyright 2019 Pluto Network. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
