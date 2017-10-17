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
  GITHUB_WHITE: require('./github-white.svg'),
  REDDIT_WHITE: require('./reddit-white.svg'),
  HIP_CHAT_WHITE: require('./hip-chat-white.svg'),
  TWITTER_WHITE: require('./twitter-white.svg'),
  MEDIUM_WHITE: require('./medium-white.svg'),
  PLUTO: require('./pluto.svg'),
  MOBILE_BTN: require('./mobile-btn.svg'),
  QUOTE_ICON: require('./quote-icon.svg'),
  CANCEL: require('./cancel.svg'),
  LEFT_ARROW: require('./left-arrow.svg'),
  RIGHT_ARROW: require('./right-arrow.svg'),
  TWITTER_COLOR: require('./twitter_color.svg'),
  FACEBOOK_COLOR: require('./facebook_color.svg'),
  TELEGRAM_COLOR: require('./telegram_color.svg'),
  NEW_LOGO: require('./new-logo.svg'),

  // new home icons
  LOGO: require('./logo.svg'),
  LOGO_ONLY: require('./logo-only.svg'),
  LANG: require('./lang.svg'),
  MOBILE_BTN_BLUE: require('./mobile-btn-blue.svg'),
  CANCEL_BLUE: require('./cancel-blue.svg'),
  FOOTER_LOGO: require('./footer-logo.svg'),
  FACEBOOK_FOOTER: require('./facebook-footer.svg'),
  MEDIUM_FOOTER: require('./medium-footer.svg'),
  TWITTER_FOOTER: require('./twitter-footer.svg'),
  TELEGRAM_FOOTER: require('./telegram-footer.svg'),
  GITHUB_FOOTER: require('./github-footer.svg'),
  WAVES: require('./waves.svg'),
  BUBBLES: require('./bubbles.svg'),
  PLAY_BUTTON: require('./play-button.svg'),
  PROBLEM_1: require('./problem-1.svg'),
  PROBLEM_2: require('./problem-2.svg'),
  PROBLEM_3: require('./problem-3.svg'),
  PROBLEM_4: require('./problem-4.svg'),
  WAVE_LINE: require('./wave-line.svg'),
  FEATURE_1: require('./feature-1.svg'),
  FEATURE_2: require('./feature-2.svg'),
  FEATURE_3: require('./feature-3.svg'),
  REPUTATION_BG: require('./reputation-bg.svg'),
  REPUTATION_ITEM_1: require('./reputation-item-1.svg'),
  REPUTATION_ITEM_2: require('./reputation-item-2.svg'),
  REPUTATION_ITEM_3: require('./reputation-item-3.svg'),
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
