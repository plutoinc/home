import React from 'react';
import 'bootstrap';
// styles
import styles from './root.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

class Root extends React.PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default withStyles(styles)(Root);
