import * as actionTypes from '../actions/actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const loadTopArtistsSuccess = topArtists => {
  return {
    type: actionTypes.LOAD_TOP_ARTISTS_DATA_SUCCESS,
    topArtists: topArtists
  };
};

export const loadTopArtistsFailure = error => {
  return {
    type: actionTypes.LOAD_TOP_ARTISTS_DATA_FAILURE,
    error
  };
};

export const loadTopArtistsData = () => {
  return dispatch => {
    spotifyApi.getMyTopArtists((err, data) => {
      if (data) {
        dispatch(loadTopArtistsSuccess(data));
      } else {
        console.warn('Error in loadTopArtistsData:', err);
        dispatch(loadTopArtistsFailure(err));
      }
    });
  };
};

export const loadArtistSuccess = artist => {
  return {
    type: actionTypes.LOAD_ARTIST_DATA_SUCCESS,
    artist: artist
  };
};

export const loadArtistFailure = error => {
  return {
    type: actionTypes.LOAD_ARTIST_DATA_FAIL,
    error
  };
};

export const loadArtistData = term => {
  return dispatch => {
    spotifyApi.getArtist(term, (err, data) => {
      if (data) {
        dispatch(loadArtistSuccess(data));
      } else {
        console.warn('Error in loadTopArtistsData:', err);
        dispatch(loadArtistFailure(err));
      }
    });
  };
};
