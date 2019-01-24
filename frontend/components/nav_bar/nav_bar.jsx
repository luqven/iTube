import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="nav-container">
      <h1 className="title-logo">iTube</h1>
      <section className="nav-auth-buttons">
        <Link className="btn" to="/login">Sign In</Link>
        {/* <Link className="btn" to="/signup">Sign Up</Link> */}
      </section>
    </div>
  )
}
