import {GET_EVENTS, GET_EVENT, CREATE_EVENT, DELETE_EVENT} from './types'; 
import  axios from 'axios';

const API_URL = "http://localhost:5000/api/v1" ; 

export function getEvents(){
    const request = axios.get(`${API_URL}/events`);
    return{
      type: GET_EVENTS,
      payload: request
    };
  }

  export function createEvent(props){
    const request = axios.post(`${API_URL}/events`, props);
    return{
      type: CREATE_EVENT,
      payload: request
    };
  }

  export function deleteEvent(id){
    const request = axios.delete(`${API_URL}/events/${id}`);
  
    return{
      type: DELETE_EVENT,
      payload: request
    }; 
  }

  export function getEvent(id){
    const request = axios.get(`${API_URL}/event/${id}`);
  
    return{
      type: GET_EVENT,
      payload: request
    }; 
  }
  