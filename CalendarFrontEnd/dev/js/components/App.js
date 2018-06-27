import React, {Component} from 'react';
import Calendar from "./Calendar";
import axios from 'axios'
// import List from './List'
// import SearchBar from './SearchBar'
// import spinner from './spinner.gif'
import SongDisplay from './SongDisplay';
import SongList from './SongList';
import Header from './Header';

import "../../scss/style.scss";
import {connect} from 'react-redux';
import {getEvents} from '../actions/index'; 
import {Link} from 'react-router'; 

class App extends Component{
  render() {
      return (
        <div className="App">
          <header>
            <div id="logo">
              <span className="icon">
              <div>
      <Header />
      <br/>
      <SongList />
      <hr/>
      <SongDisplay />
    </div>
              <b> PLAY</b>Dates
              {this.props.children}
              </span>
            </div>
            
          </header>
        
        </div>
      );
    }
  
    }
export default App
