import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form'; 
import {createEvent} from '../actions/index'; 

class NewEvent extends Component{
  static contextTypes = {
    router: PropTypes.object
  }
  onSubmit(props){
    this.props.createEvent(props)
      .then(() => {
        this.context.router.push('/');
      });
  }
  render() {
        const {fields:{title}, handleSubmit} = this.props; 

    return(
      <div className="container">
      <h1> Create a new Event </h1> 
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

      <div className="form-group">
         <label>Title</label>
        <input type="text" className="form-control" {...title} />
       </div>
       <button type="submit" className="btn btn-success">Create</button>
     </form>
      </div>
    );
  }





  // onSubmit(props){
  //   this.props.createEvent(props)
  //     .then(() => {
  //       this.context.router.push('/');
  //     });
  // }

  // render(){
  //   const {fields:{title}, handleSubmit} = this.props; 

  //   return(
  //     <div className="container">

  //     <h1> Create a new Event </h1> 

  //     <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

  //       <div className="form-group">
  //         <label>Title</label>
  //         <input type="text" className="form-control" {...title} />
  //       </div>
  //       <button type="submit" className="btn btn-success">Create</button>
  //     </form>

  //     </div>
  //   );
  // }
}

export default reduxForm({
  form: 'NewEventForm',
  fields: ['title'] 
}, null, {createEvent})(NewEvent); 
