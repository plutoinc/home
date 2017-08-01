import { fromJS } from 'immutable';
import { ACTION_TYPES } from './actions';

export const LOCALE_INITIAL_STATE = fromJS({
  lang: 'en',
  messages: null,
});

export function reducer(state = LOCALE_INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_EMAIL_INPUT: {
      return state.set('lang', action.payload.lang);
    }

    case ACTION_TYPES.CHANGE_MESSAGE: {
      return state.set('messages', action.payload.messages);
    }

    default:
      return state;
  }
}
