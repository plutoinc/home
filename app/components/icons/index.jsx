import React from 'react';
const InlineSVG = require('svg-inline-react');

const ICONS = {
  DOUBLE_QUOTATION: require('./double-quotation.svg'),
  INCREASING_REVENUE: require('./increasing-revenue.svg'),
  RACK_OF_TRUST: require('./rack-of-trust.svg'),
  RESOURCE_COST: require('./resource-cost.svg'),
  GITHUB: require('./github.svg'),
  REDDIT: require('./reddit.svg'),
  HIP_CHAT: require('./hip-chat.svg'),
  TWITTER: require('./twitter.svg'),
  MEDIUM: require('./medium.svg'),
  PLUTO: require('./pluto.svg'),
  MOBILE_BTN: require('./mobile-btn.svg'),
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
