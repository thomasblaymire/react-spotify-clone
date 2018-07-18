import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tracksResults: [],
  favouriteTracks: [],
  recentTracks: [],
  topTracks: null,
  error: false,
  toggleDrawer: false,
  currentlyPlaying: ''
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

const loadRecentTracksSuccess = (state, action) => {
  return {
    ...state,
    recentTracks: action.recentTracks.items
  };
};

const loadRecentTracksFailure = state => {
  return {
    ...state,
    error: true
  };
};

const setFavouriteTrack = (state, action) => {
  return {
    ...state,
    favouriteTracks: [...state.favouriteTracks, action.track]
  };
};

const toggleDrawer = (state, action) => {
  return {
    ...state,
    toggleDrawer: true,
    currentlyPlaying: action.track
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
    case actionTypes.LOAD_RECENT_TRACKS_DATA_SUCCESS:
      return loadRecentTracksSuccess(state, action);
    case actionTypes.LOAD_RECENT_TRACKS_DATA_FAILURE:
      return loadRecentTracksFailure(state, action);
    case actionTypes.SET_FAVOURITE_TRACK:
      return setFavouriteTrack(state, action);
    case actionTypes.TOGGLE_DRAWER:
      return toggleDrawer(state, action);
    default:
      return state;
  }
};

export default reducer;
