import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getEvents} from '../actions/index'; 
import {Link} from 'react-router'; 
import "../../scss/style.scss";


class EventsHome extends Component {
    componentWillMount(){
        this.props.getEvents();  
      } 
      renderEvents(){
        return this.props.events.map((event) => {
          return (
            <li key={event.id}> 
              <Link to={"events/" + event.id }>
                <h4> {event.title} </h4> 
              </Link> 
            </li> 
          )
        });
      }
    render() {
        return(
            <div className="container">
      
            <div>
            <Link to="events/new" className="btn btn-warning">
            Create Event
            </Link> 
            </div>
      
            Event Home Page
            <ul className="list-group">
            {this.renderEvents()}
            </ul>
            </div>
          );
        }
      }

      function mapStateToProps(state){
        return {events: state.events.all } 
      }
      
export default connect(mapStateToProps, {getEvents: getEvents})(EventsHome); 

