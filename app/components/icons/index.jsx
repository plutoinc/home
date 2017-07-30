import React from 'react';
const InlineSVG = require('svg-inline-react');

const ICONS = {
  DOUBLE_QUOTATION: require('./double-quotation.svg'),
};

class Icon extends React.PureComponent {
  render() {
    let className = 'icon';
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return <InlineSVG className={className} src={ICONS[this.props.icon]} />;
  }
}

export default Icon;
