import { fromJS } from "immutable";
import { ACTION_TYPES } from "./actions";

export const HOME_INITIAL_STATE = fromJS({
  email: "",
  isTop: false,
});

export function reducer(state = HOME_INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_EMAIL_INPUT: {
      return state.set("email", action.payload.email);
    }

    case ACTION_TYPES.ENTER_SCROLL_TOP: {
      return state.set("isTop", true);
    }

    case ACTION_TYPES.LEAVE_SCROLL_TOP: {
      return state.set("isTop", false);
    }

    default:
      return state;
  }
}
