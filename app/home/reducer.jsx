import { fromJS } from 'immutable';
import { ACTION_TYPES } from './actions';

export const HOME_INITIAL_STATE = fromJS({
  isLoading: false,
  email: '',
});

export function reducer(state = HOME_INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_EMAIL_INPUT: {
      return state.set('email', action.payload.email);
    }

    default:
      return state;
  }
}
