import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux'; 
import {getEvent, deleteEvent} from '../actions/index'; 

class SingleEventShow extends Component{
    static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount(){
        this.props.getEvent(this.props.params.id); 
      }
        deleteButtonClick(){
    this.props.deleteEvent(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      }); 
  }
  render(){
        if(!this.props.event){
      return <div> Getting event, please wait. </div>; 
    }
    return(
      <div className="container">
       <h3>Title: {this.props.event.title} </h3>
       <button className="btn btn-warning" onClick={this.deleteButtonClick.bind(this)}>
         Delete Event
       </button> 
      </div>
    )
  }
//   static contextTypes = {
//     router: PropTypes.object
//   }

//   componentWillMount(){
//     this.props.getEvent(this.props.params.id); 
//   }

//   deleteButtonClick(){
//     this.props.deleteEvent(this.props.params.id)
//       .then(() => {
//         this.context.router.push('/');
//       }); 
//   }

//   render(){
//     if(!this.props.event){
//       return <div> Getting event, please wait. </div>; 
//     }

//     return(
//       <div className="container">

//       <h3>Title: {this.props.event.title} </h3>

//       <button className="btn btn-warning" onClick={this.deleteButtonClick.bind(this)}>
//         Delete Event
//       </button> 

//       </div>
//     );
//   }
}

function mapStateToProps(state){
  return { event: state.events.event}; 
}



// export default connect(mapStateToProps, {getEvent, deleteEvent})(SingleEventShow); 
export default connect(mapStateToProps, {getEvent, deleteEvent})(SingleEventShow); 