import * as actionTypes from '../actions/actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const toggleActionMenu = track => {
  return {
    type: actionTypes.TOGGLE_ACTION_MENU,
    track
  };
};
