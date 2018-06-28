import { combineReducers } from 'redux';
import EventsReducer from './events_reducer'; 
import {reducer as formReducer} from 'redux-form';
import songChangeReducer from './songChangeReducer';
import lyricChangeReducer from './lyricChangeReducer';


// const rootReducer = combineReducers({
//   currentSongId: songChangeReducer,
//   songsById: lyricChangeReducer
// });

const allReducers = combineReducers({
  events: EventsReducer, 
  form: formReducer,
  currentSongId: songChangeReducer,
  songsById: lyricChangeReducer
});


export default allReducers;

  
