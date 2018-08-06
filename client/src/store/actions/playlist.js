import * as actionTypes from '../actions/actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const loadUserPlaylistSuccess = playlists => {
  return {
    type: actionTypes.LOAD_USER_PLAYLIST_DATA_SUCCESS,
    playlists: playlists
  };
};

export const loadUserPlaylistFailure = error => {
  return {
    type: actionTypes.LOAD_USER_PLAYLIST_DATA_FAILURE,
    error
  };
};

export const loadUserPlaylistsData = () => {
  console.log('HIT');
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
