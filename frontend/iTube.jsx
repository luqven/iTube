// entry file

import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';
import { fetchLikes, postLike } from './utils/like';
import { searchForTerms } from './utils/search';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fabYoutube } from "@fortawesome/free-brands-svg-icons";
import { faUserCircle, faSignOutAlt, faVideo, faFileVideo,
         faUpload, faFileImage, faCheckCircle, faThumbsUp, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faUserCircle, faSignOutAlt, faVideo,
  faUpload, faFileImage, faFileVideo, faCheckCircle, faThumbsUp, faSearch);

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
  // window.fetchLikes = fetchLikes;
  // window.postLike = postLike;
  // window.searchForTerms = searchForTerms;
  // TESTING END

  ReactDOM.render(<Root store={store}/>, root);
  // ReactDOM.render(<h1>iTube</h1>, root);
});