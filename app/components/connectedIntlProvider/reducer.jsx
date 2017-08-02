import { ACTION_TYPES } from './actions';
import { getMessages } from './';

export const LOCALE_INITIAL_STATE = {
  lang: 'en',
  messages: getMessages('en'),
};

export function reducer(state = LOCALE_INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_LOCALE: {
      return { ...state, ...{ lang: action.payload.lang, messages: action.payload.messages } };
    }

    default:
      return state;
  }
}
