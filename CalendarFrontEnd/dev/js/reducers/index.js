import { combineReducers } from 'redux';
import EventsReducer from './events_reducer'; 
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
    events: EventsReducer, 
    form: formReducer
  });
  
  export default allReducers