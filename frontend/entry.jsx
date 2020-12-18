import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';
import configureStore from './store/store';

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
  // window.store = store
  //done testing
  
  ReactDOM.render(<Root store={store} />, root);
})