import { combineReducers } from 'redux';
import tracksReducer from './tracksReducer';
import artistsReducer from './artistsReducer';
import trackActionsReducer from './trackActionsReducer';
import playlistsReducer from './playlistsReducer';

export default combineReducers({
  tracks: tracksReducer,
  artists: artistsReducer,
  trackActions: trackActionsReducer,
  playlists: playlistsReducer
});
