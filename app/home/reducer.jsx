import { fromJS } from "immutable";
import { ACTION_TYPES } from "./actions";

export const HOME_INITIAL_STATE = fromJS({
  email: "",
  emailSubscribed: false,
  isTop: true
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

    case ACTION_TYPES.EMAIL_SUBSCRIPBED: {
      return state.set("emailSubscribed", true);
    }

    case ACTION_TYPES.SUCCEEDED_TO_FETCH_BLOG_POSTS: {
      return state.set("blogPosts", action.payload.posts);
    }

    default:
      return state;
  }
}
