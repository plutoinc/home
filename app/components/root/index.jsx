import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import GlobalFeedbackButton from "../globalFeedbackButton";
import styles from './root.scss';

class Root extends React.PureComponent {
  render() {
    return <div>
      {this.props.children}
      <GlobalFeedbackButton />
    </div>;
  }
}

export default withStyles(styles)(Root);
