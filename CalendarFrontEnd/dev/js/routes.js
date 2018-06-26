import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Calendar from './components/Calendar';
import NewEvent from './components/NewEvent';
import SingleEventShow from './components/SingleEventShow';
import Musix from './components/Musix';

'use strict';


export default(
    <Route path="/" component={App}>
      <IndexRoute component={Calendar}/> 
      <Route path="/" component={Musix} />
      <Route path="events/new" component={NewEvent}/>
      <Route path="events/:id" component={SingleEventShow}/>
     

    </Route>
  );