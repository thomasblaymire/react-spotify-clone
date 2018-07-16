import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tracksResults: [],
  topTracks: null,
  error: false
};

const loadTracksSuccess = (state, action) => {
  return {
    ...state,
    tracksResults: action.tracksResults
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
    ...state,
    topTracks: action.topTracks.items
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
