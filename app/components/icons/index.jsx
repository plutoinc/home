import React from 'react';
const InlineSVG = require('svg-inline-react');

const ICONS = {
  DOUBLE_QUOTATION: require('./double-quotation.svg'),
  INCREASING_REVENUE: require('./increasing-revenue.svg'),
  RACK_OF_TRUST: require('./rack-of-trust.svg'),
  RESOURCE_COST: require('./resource-cost.svg'),
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
