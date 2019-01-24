import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

export default ({store}) => {
  const loggedIn = store.getState().entities.users != null;
  return (
    <Provider store={store}>
      <HashRouter>
        <App loggedIn={loggedIn}/>
      </HashRouter>
    </Provider>
  )
}