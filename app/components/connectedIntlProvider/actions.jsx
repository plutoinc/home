export const ACTION_TYPES = {
  CHANGE_LOCALE: 'LOCALE.CHANGE_LOCALE',
};

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
      messages,
    },
  };
}
