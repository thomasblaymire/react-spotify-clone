import * as actionTypes from '../actions/actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const loadTracksSuccess = tracksResults => {
  return {
    type: actionTypes.LOAD_TRACK_DATA_SUCCESS,
    tracksResults
  };
};

export const loadTracksFailure = error => {
  return {
    type: actionTypes.LOAD_TRACK_DATA_FAILURE,
    error
  };
};

export const loadTracksData = term => {
  return dispatch => {
    spotifyApi.searchTracks(term, (err, data) => {
      if (data) {
        dispatch(loadTracksSuccess(data.tracks.items));
      } else {
        console.warn('Error in loadTopTracksData:', err);
        dispatch(loadTracksFailure(err));
      }
    });
  };
};

export const loadTopTracksSuccess = topTracks => {
  return {
    type: actionTypes.LOAD_TOP_TRACKS_DATA_SUCCESS,
    topTracks: topTracks
  };
};

export const loadTopTracksFailure = error => {
  return {
    type: actionTypes.LOAD_TOP_TRACKS_DATA_FAILURE,
    error
  };
};

export const loadTopTracksData = () => {
  return dispatch => {
    spotifyApi.getMyTopTracks((err, data) => {
      if (data) {
        dispatch(loadTopTracksSuccess(data));
      } else {
        console.warn('Error in loadTopTracksData:', err);
        dispatch(loadTopTracksFailure(err));
      }
    });
  };
};
