import React from 'react';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import koLocaleData from 'react-intl/locale-data/ko';
import EnvChecker from '../../helpers/envChecker';
import { changeLocale, changeMessages } from './actions';

const SUPPORTED_LANGUAGES = ['en', 'ko'];
const DEFAULT_LANGUAGE = 'en';
const TRANSLATIONS = {};

for (const locale of SUPPORTED_LANGUAGES) {
  TRANSLATIONS[locale] = require(`./assets/${locale}.json`);
}

export function addLocaleDataSet() {
  const allLocaleData = [...enLocaleData, ...koLocaleData];
  addLocaleData(allLocaleData);
}

export function localeFinder() {
  if (!EnvChecker.isServer()) {
    let locale = navigator.language || navigator.browserLanguage;
    locale = locale.split('-')[0];
    if (!SUPPORTED_LANGUAGES.includes(locale)) {
      locale = DEFAULT_LANGUAGE;
    }
    return locale;
  }
  return DEFAULT_LANGUAGE;
}

export function getMessages(locale) {
  let localeData = TRANSLATIONS[locale];
  if (!localeData) {
    localeData = TRANSLATIONS[DEFAULT_LANGUAGE];
  }
  return localeData;
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
      currentLocale = userLocale.split('-')[0];
    } else {
      currentLocale = localeFinder();
    }

    const currentMessage = getMessages(currentLocale);
    dispatch(changeLocale(currentLocale, currentMessage));
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.locale !== nextProps.locale);
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