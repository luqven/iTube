import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="nav-container">
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Sign In</Link>
    </div>
  )
}
