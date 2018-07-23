import * as actionTypes from '../actions/actionTypes';

export const toggleActionMenu = track => {
  return {
    type: actionTypes.TOGGLE_ACTION_MENU,
    track
  };
};
