import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tracks: [],
  error: false
};

const loadTracksSuccess = (state, action) => {
  return {
    tracks: action.tracks
  };
};

const loadTracksFailure = state => {
  return {
    ...state,
    error: true
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TRACK_DATA_SUCCESS:
      return loadTracksSuccess(state, action);
    case actionTypes.LOAD_TRACK_DATA_FAILURE:
      return loadTracksFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
