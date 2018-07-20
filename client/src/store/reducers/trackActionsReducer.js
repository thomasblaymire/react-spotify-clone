import * as actionTypes from '../actions/actionTypes';

const initialState = {
  toggleActionMenu: false
};

const toggleActionMenu = (state, action) => {
  return {
    ...state,
    toggleActionMenu: true
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ACTION_MENU:
      return toggleActionMenu(state, action);
    default:
      return state;
  }
};

export default reducer;
