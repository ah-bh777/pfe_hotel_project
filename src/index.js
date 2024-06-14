import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App1 from './App1';
import  reducer from './store/reducer.jsx'

import {legacy_createStore } from "redux"
import { Provider } from "react-redux"

const store = legacy_createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App1 />
  </Provider>
);
