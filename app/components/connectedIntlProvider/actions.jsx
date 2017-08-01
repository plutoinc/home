export const ACTION_TYPES = {
  CHANGE_LOCALE: 'LOCALE.CHANGE_LOCALE',
  CHANGE_MESSAGE: 'LOCALE.CHANGE_MESSAGE',
};

/**
 *
 * @param { locale } string - locale code (ex: en)
 */
export function changeLocale(locale) {
  return {
    type: ACTION_TYPES.CHANGE_LOCALE,
    lang: locale,
  };
}

/**
 *
 * @param { messages } object - locale code (ex: en)
 */
export function changeMessages(messages) {
  return {
    type: ACTION_TYPES.CHANGE_MESSAGE,
    payload: {
      messages,
    },
  };
}
