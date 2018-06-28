import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router'; 
import { createHashHistory } from 'history'
import {createProvider} from 'react-redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import rootReducer from './reducers';
import { connect } from 'react-redux'

import App from './components/App';
import Calendar from './components/Calendar';
import {reduxForm} from 'redux-form'; 


import routes from './routes'; 

const storemusix = createStore(rootReducer);

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
    <Router history = {browserHistory}routes = {routes}/>
     </Provider>,
    document.getElementById('app')
);



// ReactDOM.render(
//     <Provider store={store}>
//     <Router history = {browserHistory}routes = {routes}/>

     
//     </Provider>,
//     document.getElementById('app')
//   );