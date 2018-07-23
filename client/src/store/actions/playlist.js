import * as actionTypes from '../actions/actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const loadUserPlaylistSuccess = artist => {
  return {
    type: actionTypes.LOAD_USER_PLAYLIST_DATA_SUCCESS,
    artist: artist
  };
};

export const loadUserPlaylistFailure = error => {
  return {
    type: actionTypes.LOAD_USER_PLAYLIST_DATA_FAIL,
    error
  };
};

export const loadUserPlaylistData = term => {
  return dispatch => {
    spotifyApi.getUserPlaylists((err, data) => {
      if (data) {
        dispatch(loadUserPlaylistSuccess(data));
      } else {
        console.warn('Error in loadTopArtistsData:', err);
        dispatch(loadUserPlaylistFailure(err));
      }
    });
  };
};
