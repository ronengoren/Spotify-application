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
        const {fields:{title, start_date}, handleSubmit} = this.props; 
        

    return(
     <form onSubmit={handleSubmit(this.onSubmit.bind(this))} id="create_form">
      <input id="entry_date" placeholder="Date:" className="form-control" {...start_date} />
<br/>
			<input className="form-control" type="text" placeholder="Create Event" id="entry_name" {...title} />
          <button id="save_entry" type="submit" className="btn btn-success" >Create</button>
							{/* <span id="save_entry" onClick={this.saveEntry.bind(null, this.state.currYear, this.state.currMonthN, this.state.currDay)}>SAVE</span> */}
          </form>

      
    );
    return entry_date;
  }





}

export default reduxForm({
  form: 'NewEventForm',
  fields: ['title','start_date'],
}, null, {createEvent})(NewEvent); 
