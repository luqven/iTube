import React from 'react'

export const VideoThumbnail = ({ imgSrc, update }) => {
  return (
    <img onClick={update}  className="temp-image" src={imgSrc} />
  )
}

export default VideoThumbnail;