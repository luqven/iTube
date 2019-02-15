import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UploadButton = () => {
  return (
    < section className = "upload-button" >
      <Link className=".plus" to="/upload"> + </Link>
      <p className="plus-container"><FontAwesomeIcon icon={["fas", "video"]} /></p>
    </section >
  )
};

export default UploadButton;