import React, {Component} from 'react';
import EventsHome from './EventsHome'
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';

import Calendar from "./Calendar";
import axios from 'axios'
import SongDisplay from './SongDisplay';
import SongList from './SongList';
import Header from './Header';
import NewEvent from './NewEvent'
import "../../scss/style.scss";
import {getEvents} from '../actions/index'; 
import {createEvents} from '../actions/index'; 

import {Link} from 'react-router'; 
import SingleEventShow from './SingleEventShow';

class App extends Component{
  render() {
      return (
        <div className="App">

          <header>
            <div id="logo">
              <span className="icon">
 

              <div>
      <br/>
      <hr/>
      {/* <SongDisplay /> */}
    </div>
              <b> PLAY</b>Dates
              {this.props.children}
              </span>
            </div>
            {/* <div id="contain_entries">
            <NewEvent />
            </div> */}
              {/* <EventsHome /> */}

 {/* <Calendar />  */}
{/* <EventsHome /> */}
          </header>
        
        </div>
      );
    }
  
    }
export default App
