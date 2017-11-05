import Axios from "axios";
import { fromJS } from "immutable";

export const ACTION_TYPES = {
  CHANGE_EMAIL_INPUT: "HOME.CHANGE_EMAIL_INPUT",
  ENTER_SCROLL_TOP: "HOME.ENTER_SCROLL_TOP",
  LEAVE_SCROLL_TOP: "HOME.LEAVE_SCROLL_TOP",
  UPDATE_MAX_TOP: "HOME.UPDATE_MAX_TOP",
};

/**
 * @param {string} email user's email input
 */
export function changeEmailInput(email) {
  return {
    type: ACTION_TYPES.CHANGE_EMAIL_INPUT,
    payload: {
      email,
    },
  };
}

export function enterScrollTop() {
  return {
    type: ACTION_TYPES.ENTER_SCROLL_TOP,
  };
}

export function leaveScrollTop() {
  return {
    type: ACTION_TYPES.LEAVE_SCROLL_TOP,
  };
}

export function updateMaxTop(maxTop) {
  return {
    type: ACTION_TYPES.UPDATE_MAX_TOP,
    payload: {
      maxTop,
    },
  };
}
