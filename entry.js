import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
<Provider store={ store }>
  <App/>
</Provider>,
  document.getElementById('root')
);

