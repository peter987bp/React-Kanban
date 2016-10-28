import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';

//what are these doing???
const reducer = combineReducers(reducers);
const store = createStore(reducer);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// <Provider store={ store }/>,