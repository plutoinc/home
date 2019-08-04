import React from "react";
// styles
import styles from "./footer.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.innerContainer}>
        <p>{`© Copyright ${year} Pluto Inc. All rights reserved.`}</p>
      </div>
    </footer>
  );
};

export default withStyles(styles)(Footer);
