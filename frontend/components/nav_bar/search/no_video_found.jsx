import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NoResult = () =>{
  return (
    <div className="search-no-result">
      <p>No result found</p>
      <FontAwesomeIcon icon="heart-broken" className="search-no-result"/>    
    </div>
  )
}

export default  NoResult;