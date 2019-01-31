// entry file

import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';
import {login} from './actions/session';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fabYoutube } from "@fortawesome/free-brands-svg-icons";
import { faUserCircle, faSignOutAlt, faVideo, faFileVideo, faUpload } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faUserCircle, faSignOutAlt, faVideo, faUpload, faFileVideo);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadState;
  
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = createStore(preloadedState);
    delete window.currentUser;
  } else {
    store = createStore();
  }

  // TESTING START
  window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.login = login;
  // TESTING END

  ReactDOM.render(<Root store={store}/>, root);
  // ReactDOM.render(<h1>iTube</h1>, root);
});