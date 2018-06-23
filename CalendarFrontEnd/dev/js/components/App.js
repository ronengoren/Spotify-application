<<<<<<< HEAD
import React, {Component} from 'react';
import "../../scss/style.scss";
class App extends Component{
  render(){
    return(
      <div> 
      Navbar
      {this.props.children}
      </div> 
    )

  }
}

export default App;
=======
import React from "react";
import Calendar from "./Calendar";
import "../../scss/style.scss";



// class App extends Component{
//   render(){
//     return(
//       <div> 
//       Navbar
//       {this.props.children}
//       </div> 
//     )

//   }
// }

// import "App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              react<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;

>>>>>>> ronen
