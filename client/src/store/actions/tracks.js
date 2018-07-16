import * as actionTypes from '../actions/actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const loadTracksSuccess = tracks => {
  return {
    type: actionTypes.LOAD_TRACK_DATA_SUCCESS,
    tracks: tracks
  };
};

export const loadTracksFailure = () => {
  return {
    type: actionTypes.LOAD_TRACK_DATA_FAILURE
  };
};

export const loadTracksData = term => {
  return dispatch => {
    spotifyApi.searchTracks(term, (err, data) => {
      if (data) {
        dispatch(loadTracksSuccess(data.tracks.items));
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

export const loadTopTracksFailure = () => {
  return {
    type: actionTypes.LOAD_TOP_TRACKS_DATA_FAILURE
  };
};

export const loadTopTracksData = () => {
  return dispatch => {
    spotifyApi.getMyTopTracks((err, data) => {
      if (data) {
        dispatch(loadTopTracksSuccess(data));
      }
    });
  };
};
