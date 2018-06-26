import React, {Component} from 'react';
import {Link} from 'react-router'; 
import axios from 'axios';
import {Router, browserHistory} from 'react-router'; 
import SearchBar from './SearchBar'
import List from './List'

import {connect} from 'react-redux';






class Musix extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          users: [],
          store: []
        }
      }
      componentDidMount(){
        axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
        .then(json => json.data.results.map(result => (
          {
            name: `${result.name.first} ${result.name.last}`,
            id: result.registered
          })))
        .then(newData => this.setState({users: newData, store: newData}))
        .catch(error => alert(error))
      }
      filterNames(e){
        this.setState({users: this.state.store.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})
      }
      render() {
        const {users} = this.state
        return (
          <div className="Card">
            <div className="header">This Song was realeased today 90 years ago:</div>
            <List usernames={users}/>
            <div className="spotifyLink">Listen to this song on Spotify!</div>

          </div>
        );
      }
   
  };


  export default Musix;

    




