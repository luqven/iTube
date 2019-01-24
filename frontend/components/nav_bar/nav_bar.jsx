import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const loggedIn = props.loggedIn;
  let sign_in_link;

  if (loggedIn === true) {
    
     sign_in_link = ''
    } else {
      sign_in_link = (<Link className="btn" to="/login">Sign In</Link>)
    }

  return (
    <div className="nav-container">
      <h1 className="title-logo">iTube</h1>
      <section className="nav-auth-buttons">
        {sign_in_link}
      </section>
    </div>
  )
}
