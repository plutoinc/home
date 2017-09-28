import React from "react";
import { Link } from "react-router";
// styles
import styles from "./header.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../icons";

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        HEADER
      </header>
    );
  }
}

export default withStyles(styles)(Header);
