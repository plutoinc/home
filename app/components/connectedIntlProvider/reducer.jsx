import { ACTION_TYPES } from './actions';
import { getMessages } from './';

export const LOCALE_INITIAL_STATE = {
  lang: 'en',
  messages: getMessages('en'),
};

export function reducer(state = LOCALE_INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_EMAIL_INPUT: {

      return { ...state, ...{ lang: action.payload.lang } };
    }

    case ACTION_TYPES.CHANGE_MESSAGE: {
      return { ...state, ...{ messages: action.payload.messages } };
    }

    default:
      return state;
  }
}
