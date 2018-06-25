import React from 'react';

class Model extends React.Component{

 render(){
  return(
   <div>
    //code inside the Model etc...  
    <Button onClick={this.submit.bind(this)}>Submit</Button>
   </div>
  )
 }
}

export default Model;