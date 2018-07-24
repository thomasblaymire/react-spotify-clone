import * as actionTypes from '../actions/actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const toggleDrawer = track => {
  console.log('toggleDrawAction');
  return {
    type: actionTypes.TOGGLE_DRAWER,
    track
  };
};

export const setFavouriteTrack = track => {
  return {
    type: actionTypes.SET_FAVOURITE_TRACK,
    track
  };
};

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

export const loadRecentTracksSuccess = recentTracks => {
  return {
    type: actionTypes.LOAD_RECENT_TRACKS_DATA_SUCCESS,
    recentTracks: recentTracks
  };
};

export const loadRecentTracksFailure = error => {
  return {
    type: actionTypes.LOAD_RECENT_TRACKS_DATA_FAILURE,
    error
  };
};

export const loadRecentTracksData = () => {
  return dispatch => {
    spotifyApi.getMyRecentlyPlayedTracks((err, data) => {
      if (data) {
        dispatch(loadTopTracksSuccess(data));
      } else {
        console.warn('Error in loadRecentTrackData:', err);
        dispatch(loadRecentTracksFailure(err));
      }
    });
  };
};
