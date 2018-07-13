import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tracks: [],
  topTracks: null,
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

const loadTopTracksSuccess = (state, action) => {
  return {
    topTracks: action.topTracks
  };
};

const loadTopTracksFailure = state => {
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
    case actionTypes.LOAD_TOP_TRACKS_DATA_SUCCESS:
      return loadTopTracksSuccess(state, action);
    case actionTypes.LOAD_TOP_TRACKS_DATA_FAILURE:
      return loadTopTracksFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
