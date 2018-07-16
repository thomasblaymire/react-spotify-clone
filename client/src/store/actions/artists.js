import * as actionTypes from '../actions/actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const loadTopArtistsSuccess = topArtists => {
  console.log(topArtists);
  return {
    type: actionTypes.LOAD_TOP_ARTISTS_DATA_SUCCESS,
    topArtists: topArtists
  };
};

export const loadTopArtistsFailure = () => {
  return {
    type: actionTypes.LOAD_TOP_ARTISTS_DATA_FAILURE
  };
};

export const loadTopArtistsData = () => {
  console.log('Load Top Artists Data Action HIT');
  return dispatch => {
    spotifyApi.getMyTopArtists((err, data) => {
      if (data) {
        console.log(data);
        dispatch(loadTopArtistsSuccess(data));
      }
    });
  };
};
