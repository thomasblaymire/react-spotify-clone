import * as actionTypes from '../actions/actionTypes';

const initialState = {
  topArtists: [],
  error: false
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TOP_ARTISTS_DATA_SUCCESS:
      return loadArtistsSuccess(state, action);
    case actionTypes.LOAD_TOP_ARTISTS_DATA_FAILURE:
      return loadArtistsFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
