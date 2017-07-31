export const ACTION_TYPES = {
  CHANGE_EMAIL_INPUT: 'HOME.CHANGE_EMAIL_INPUT',
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
