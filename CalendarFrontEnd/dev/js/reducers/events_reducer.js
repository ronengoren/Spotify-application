import {GET_EVENTS, GET_EVENT} from '../actions/types';


const INITIAL_STATE = {all: [], event: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_EVENTS:
      return { ...state, all: action.payload.data } ;
    case GET_EVENT:
      return { ...state, event: action.payload.data } ; 
    default:
      return state;
  }
}