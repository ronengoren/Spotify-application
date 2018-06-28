import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getEvents} from '../actions/index'; 

import {Link} from 'react-router'; 
// import "../../scss/style.scss";

class EventsHome extends React.Component{
	constructor(props){
        super(props)
        this.state = {
            events: []
        }
    }
	componentDidMount() {
        axios.get('http://localhost:5000/api/v1/events')
        .then(response => {
            console.log(response)
            this.setState({
                events: response.data
            })
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className="lists-container">
                {this.state.events.map( list => {
                    return (
                        <div className="single-list" key={list.start_day}>
                            <h4>Description: {list.title}</h4>
                            <p>Start Date: {list.start_date}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

      function mapStateToProps(state){
        return {events: state.events.all } 
      }
      
export default EventsHome; connect(mapStateToProps, {getEvents: getEvents})(EventsHome); 

