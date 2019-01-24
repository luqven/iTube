import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <section className="nav-auth-buttons">
      <Link className="btn" to="/login">Sign In</Link>
      {/* <Link className="btn" to="/signup">Sign Up</Link> */}
    </section>
  )
}