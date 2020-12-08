// import React from "react";
// import ReactDOM from "react-dom";

// document.addEventListener("DOMContentLoaded", () => {
//   const root = document.getElementById("root");
//   ReactDOM.render(<h1>Switch.tv</h1>, root);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';
import { createNewUser } from './actions/session_actions'
import { logout, login } from './actions/session_actions'
import configureStore from './store/store';
// import { logout, login } from './utils/session'

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState;
  let store;
  if (window.currentUser) {
    preloadedState = {
      session: { currentUser: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id ]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else { store = createStore(); }
  
  const root = document.getElementById('root');
  
  //testing
  window.createNewUser = createNewUser
  window.store = store
  window.logout = logout
  window.login = login
  //done testing
  
  ReactDOM.render(<Root store={store} />, root);
})