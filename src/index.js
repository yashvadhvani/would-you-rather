import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/jquery'
import 'bootstrap/dist/js/bootstrap'
import './index.css';
// import 'bootstrap/dist/js/bootstrap.js';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index'
import middleware from './middlewares/index'

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App className='bg-info' />
  </Provider>,
  document.getElementById('root')
);