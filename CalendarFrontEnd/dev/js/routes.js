import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import EventsHome from './components/EventsHome';
import NewEvent from './components/NewEvent';
import SingleEventShow from './components/SingleEventShow';




export default(
    <Route path="/" component={App}>
      <IndexRoute component={EventsHome}/> 
      <Route path="events/new" component={NewEvent}/>
      <Route path="events/:id" component={SingleEventShow}/>
    </Route>
  );