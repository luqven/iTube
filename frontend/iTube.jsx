// entry file

import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadState;
  
  if (window.currentUser) {
    preloadState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }

  let store = createStore(preloadState);

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  ReactDOM.render(<Root store={store}/>, root);
  // ReactDOM.render(<h1>iTube</h1>, root);
});