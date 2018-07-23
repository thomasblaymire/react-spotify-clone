import * as actionTypes from '../actions/actionTypes';

const initialState = {
  playlists: [],
  error: false
};

const loadUserPlaylistsSuccess = (state, action) => {
  return {
    playlists: action.playlists
  };
};

const loadUserPlaylistsFailure = state => {
  return {
    ...state,
    error: true
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER_PLAYLIST_DATA_SUCCESS:
      return loadUserPlaylistsSuccess(state, action);
    case actionTypes.LOAD_USER_PLAYLIST_DATA_FAILURE:
      return loadUserPlaylistsFailure(state, action);
    default:
      return state;
  }
};

export default reducer;
