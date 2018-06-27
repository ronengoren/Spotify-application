import {GET_EVENTS, GET_EVENT, CREATE_EVENT, DELETE_EVENT} from './types'; 
import  axios from 'axios';
import v4 from 'uuid/v4';
import * as types from '../constants/ActionTypes';

const API_URL = "http://localhost:5000/" ; 


export const nextLyric = (currentSongId) => ({
  type: types.NEXT_LYRIC,
  currentSongId
});

export const restartSong = (currentSongId) => ({
  type: types.RESTART_SONG,
  currentSongId
});

export const changeSong = (newSelectedSongId) => ({
  type: types.CHANGE_SONG,
  newSelectedSongId
});

export function fetchSongId(title) {
  return function (dispatch) {
    const localSongId = v4();
    dispatch(requestSong(title, localSongId));
    title = title.replace(' ', '_');
    return fetch('http://api.musixmatch.com/ws/1.1/track.search?apikey=d2534efb46fbe28c49449d58f2018e9d&q_track=' + title + '&page_size=1&s_track_rating=desc').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log('CHECK OUT THIS SWEET API RESPONSE:', json.message.body.track_list[0].track.artist_name);
    });
  };
}

export const requestSong = (title, localSongId) => ({
  type: types.REQUEST_SONG,
  title,
  songId: localSongId
});

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
    const request = axios.get(`${API_URL}/events/${id}`);
  
    return{
      type: GET_EVENT,
      payload: request
    }; 
  }
  