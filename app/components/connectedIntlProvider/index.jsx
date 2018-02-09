import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import EnvChecker from "../../helpers/envChecker";
import {
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  changeLocale,
  getMessages,
  addLocaleDataSet
} from "./actions";

export function localeFinder() {
  if (!EnvChecker.isServer()) {
    let locale = navigator.languages
      ? navigator.languages[0]
      : navigator.language || navigator.userLanguage;
    locale = locale.split("-")[0];
    if (!SUPPORTED_LANGUAGES.includes(locale)) {
      locale = DEFAULT_LANGUAGE;
    }
    return locale;
  }
  return DEFAULT_LANGUAGE;
}

class ConnectedIntlProvider extends React.Component {
  constructor(props) {
    super(props);

    addLocaleDataSet();
  }

  componentWillMount() {
    const { dispatch, userLocale } = this.props;

    let currentLocale;
    if (userLocale) {
      currentLocale = userLocale.split("-")[0];
    } else {
      currentLocale = localeFinder();
    }

    const currentMessage = getMessages(currentLocale);
    dispatch(changeLocale(currentLocale, currentMessage));
  }

  shouldComponentUpdate(nextProps) {
    return this.props.locale !== nextProps.locale;
  }

  render() {
    const { locale, messages, children } = this.props;

    return (
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    );
  }
}

function mapStateToProps(appState) {
  return { locale: appState.locale.lang, messages: appState.locale.messages };
}

export default connect(mapStateToProps)(ConnectedIntlProvider);
