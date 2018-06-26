import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Calendar from './components/Calendar';
import NewEvent from './components/NewEvent';
import SingleEventShow from './components/SingleEventShow';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Calendar} /> 
    <Route path="articles/new" component={NewEvent} />
    <Route path="articles/:id" component={SingleEventShow} />
  </Route>
  ); 