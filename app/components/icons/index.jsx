import React from "react";
const InlineSVG = require("svg-inline-react");

const ICONS = {
  DOUBLE_QUOTATION: require("./double-quotation.svg"),
  RIGHT_SIDE_ARROW: require("./right-side-arrow.svg"),
  GITHUB: require("./github.svg"),
  REDDIT: require("./reddit.svg"),
  HIP_CHAT: require("./hip-chat.svg"),
  TWITTER: require("./twitter.svg"),
  MEDIUM: require("./medium.svg"),
  GITHUB_WHITE: require("./github-white.svg"),
  REDDIT_WHITE: require("./reddit-white.svg"),
  HIP_CHAT_WHITE: require("./hip-chat-white.svg"),
  TWITTER_WHITE: require("./twitter-white.svg"),
  MEDIUM_WHITE: require("./medium-white.svg"),
  PLUTO: require("./pluto.svg"),
  MOBILE_BTN: require("./mobile-btn.svg"),
  QUOTE_ICON: require("./quote-icon.svg"),
  CANCEL: require("./cancel.svg"),
  LEFT_ARROW: require("./left-arrow.svg"),
  RIGHT_ARROW: require("./right-arrow.svg"),
  TWITTER_COLOR: require("./twitter_color.svg"),
  FACEBOOK_COLOR: require("./facebook_color.svg"),
  TELEGRAM_COLOR: require("./telegram_color.svg"),
  NEW_LOGO: require("./new-logo.svg"),

  // new home icons
  LOGO: require("./logo.svg"),
  LOGO_ONLY: require("./logo-only.svg"),
  LOGO_WHITE: require("./logo-white.svg"),
  LANG: require("./lang.svg"),
  MOBILE_BTN_BLUE: require("./mobile-btn-blue.svg"),
  CANCEL_BLUE: require("./cancel-blue.svg"),
  FOOTER_LOGO: require("./footer-logo.svg"),
  FACEBOOK_FOOTER: require("./facebook-footer.svg"),
  MEDIUM_FOOTER: require("./medium-footer.svg"),
  TWITTER_FOOTER: require("./twitter-footer.svg"),
  TELEGRAM_FOOTER: require("./telegram-footer.svg"),
  GITHUB_FOOTER: require("./github-footer.svg"),
  WAVES: require("./waves.svg"),
  WAVES_DETAIL: require("./waves-detail.svg"),
  BUBBLES: require("./bubbles.svg"),
  PLAY_BUTTON: require("./play-button.svg"),
  PROBLEM_ILLUST: require("./problem-illust.svg"),
  WAVE_LINE: require("./wave-line.svg"),
  FEATURE_1: require("./feature-1.svg"),
  FEATURE_2: require("./feature-2.svg"),
  REPUTATION_BG: require("./reputation-bg.svg"),
  WHAT_ITEM_1: require("./what-item-1.svg"),
  WHAT_ITEM_2: require("./what-item-2.svg"),
  WHAT_ITEM_3: require("./what-item-3.svg"),
  ARROW_POINT: require("./arrow-point.svg"),
  SCROLL_INDICATOR: require("./scroll-indicator.svg"),
  POC_OVAL: require("./poc-oval.svg"),
  BREAKDOWN: require("./breakdown.svg"),
  WP_ARROW: require("./wp-arrow.svg"),
  WP_OVAL: require("./wp-oval.svg"),
  WHITE_LOGO: require("./pluto-white-logo.svg"),
  MAIL: require("./mail.svg"),
  // faq page
  FAQ_BALLOON: require("./faq-balloon.svg"),
  TELEGRAM_ICON: require("./telegram-icon.svg"),
};

class Icon extends React.PureComponent {
  render() {
    let className = "icon";
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return <InlineSVG className={className} src={ICONS[this.props.icon]} />;
  }
}

export default Icon;
