import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import styles from "./root.scss";

class Root extends React.PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withStyles(styles)(Root);
