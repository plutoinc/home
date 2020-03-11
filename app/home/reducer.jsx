import { fromJS } from "immutable";
import { ACTION_TYPES } from "./actions";

export const HOME_INITIAL_STATE = fromJS({
  isTop: true
});

export function reducer(state = HOME_INITIAL_STATE, action) {
  switch (action.type) {
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
