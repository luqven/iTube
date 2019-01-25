import React from 'react';
import { Link } from 'react-router-dom';
import DropDownContainer from './drop_down/drop_down_container';

export default (props) => {

  const loggedIn = props.loggedIn;
  let drop_down;

  if (loggedIn) {
     drop_down = (<DropDownContainer user={props.user} />)
    } else {
      drop_down = (<Link className="btn" to="/login">Sign In</Link>)
    }

  return (
    <div className="nav-container">
      <Link to="/" className="title-logo"> iTube </Link>
      <section className="nav-auth-buttons">
        {drop_down}
      </section>
    </div>
  )
}
