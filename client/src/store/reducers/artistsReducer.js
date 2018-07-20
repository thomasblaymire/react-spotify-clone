import * as actionTypes from '../actions/actionTypes';

const initialState = {
  topArtists: [],
  error: false,
  artist: []
};

const loadArtistsSuccess = (state, action) => {
  return {
    topArtists: action.topArtists
  };
};

const loadArtistsFailure = state => {
  return {
    ...state,
    error: true
  };
};

const loadArtistSuccess = (state, action) => {
  return {
    artist: action.artist
  };
};

const loadArtistFailure = state => {
  return {
    ...state,
    error: true
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TOP_ARTISTS_DATA_SUCCESS:
      return loadArtistsSuccess(state, action);
    case actionTypes.LOAD_TOP_ARTISTS_DATA_FAILURE:
      return loadArtistsFailure(state, action);
    case actionTypes.LOAD_ARTIST_DATA_SUCCESS:
      return loadArtistSuccess(state, action);
    case actionTypes.LOAD_ARTIST_DATA_FAIL:
      return loadArtistFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
