import { combineReducers } from 'redux';
import tracksReducer from './tracksReducer';
import artistsReducer from './artistsReducer';
import trackActionsReducer from './trackActionsReducer';

export default combineReducers({
  tracks: tracksReducer,
  artists: artistsReducer,
  trackActions: trackActionsReducer
});
