import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LogoButton = () => {
  return (
    <Link to="/" className="title-logo">
      <p><FontAwesomeIcon icon={["fab", "youtube"]} /></p> iTube
    </Link>
  )
};

export default LogoButton;