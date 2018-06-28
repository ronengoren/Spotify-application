
import React, {Component} from 'react';
import {GET_EVENTS, GET_EVENT, CREATE_EVENT, DELETE_EVENT} from './types'; 
import  axios from 'axios';
import v4 from 'uuid/v4';
import * as types from '../constants/ActionTypes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SongDisplay from '../components/SongDisplay';
import SongList from '../components/SongList';
import Header from '../components/Header';
import SongSearch from '../components/SongSearch';



const API_URL = "http://localhost:5000/api/v1" ; 


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
    return fetch('http://api.musixmatch.com/ws/1.1/track.search?apikey=d2534efb46fbe28c49449d58f2018e9d&f_track_release_group_first_release_date_max=19880803&f_track_release_group_first_release_date_min=19880803').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      // console.log('CHECK OUT THIS SWEET API RESPONSE:', json.message.body.track_list[0].track.artist_name);
      var release_date = json.message.body.track_list[2].track.first_release_date;
      var album_name = json.message.body.track_list[2].track.album_name;
      var artist_name = json.message.body.track_list[2].track.artist_name;
      var query = json.message.body.track_list[2].track;

      console.log("release date: " + release_date)
      console.log("artist_name: " + artist_name)

      console.log("album_name: " + album_name)
      console.log(query)
    

  
    });
  };
}
// http://api.musixmatch.com/ws/1.1/track.search?apikey=d2534efb46fbe28c49449d58f2018e9d&q_track=' + title + '&page_size=1&s_track_rating=desc
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
  