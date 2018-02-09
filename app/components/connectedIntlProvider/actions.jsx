import { addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import koLocaleData from "react-intl/locale-data/ko";

export const SUPPORTED_LANGUAGES = ["en", "ko"];
export const DEFAULT_LANGUAGE = "en";

export const ACTION_TYPES = {
  CHANGE_LOCALE: "LOCALE.CHANGE_LOCALE"
};

const TRANSLATIONS = {};
for (const locale of SUPPORTED_LANGUAGES) {
  TRANSLATIONS[locale] = require(`./assets/${locale}.json`);
}

export function addLocaleDataSet() {
  const allLocaleData = [...enLocaleData, ...koLocaleData];
  addLocaleData(allLocaleData);
}

/**
 *
 * @param { locale } string - locale code (ex: en)
 */

export function getMessages(locale) {
  let localeData = TRANSLATIONS[locale];
  if (!localeData) {
    localeData = TRANSLATIONS[DEFAULT_LANGUAGE];
  }
  return localeData;
}

/**
 *
 * @param { locale } string - locale code (ex: en)
 * @param { messages } object - locale code
 */
export function changeLocale(locale, messages) {
  return {
    type: ACTION_TYPES.CHANGE_LOCALE,
    payload: {
      lang: locale,
      messages
    }
  };
}
