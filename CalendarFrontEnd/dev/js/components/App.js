import React, {Component} from 'react';
import Calendar from "./Calendar";

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
            
              <b> PLAY</b>Dates
              {this.props.children}
              </span>
            </div>
          </header>
        
        </div>
      );
    }
  
  // render(){
  //   return(
  //     <div> 
  //     Navbar
  //     {this.props.children}
  //     </div> 
  //   )

  // }
}

// import "App.css";

// class EventsHome extends Component {
//   componentWillMount(){
//       this.props.getEvents();  
//     } 
//     renderEvents(){
//       return this.props.events.map((event) => {
//         return (
//           <li key={event.id}> 
//             <Link to={"events/" + event.id }>
//               <h4> {event.title} </h4> 
//             </Link> 
//           </li> 
//         )
//       });
//     }
  // render() {
  //     return(
  //         <div className="container">
    
  //         <div>
  //         <Link to="events/new" className="btn btn-warning">
  //         Create Event
  //         </Link> 
  //         {this.props.children}

  //         </div>
    
  //         Event Home Page
  //         <ul className="list-group">
  //         {this.renderEvents()}
  //         </ul>
  //         </div>
  //       );
  //     }
  //   }

    // function mapStateToProps(state){
    //   return {events: state.events.all } 
    // }

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <div id="logo">
//             <span className="icon">date_range</span>
//             <span>
//             <b> PLAY</b>Dates
//             </span>
//           </div>
//         </header>
//         <main>
//           <Calendar />
//         </main>
//       </div>
//     );
//   }
// }

// export default App; connect(mapStateToProps, {getEvents: getEvents})(App); 
export default App
