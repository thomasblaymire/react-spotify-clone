import { combineReducers } from 'redux';
import tracksReducer from './tracksReducer';
import artistsReducer from './artistsReducer';

export default combineReducers({
  tracks: tracksReducer,
  artists: artistsReducer
});
