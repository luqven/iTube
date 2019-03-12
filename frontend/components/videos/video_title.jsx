import React from 'react'

export const VideoTitle = ({ title, update }) => {
  return (
    <p className="video-title" onClick={update} > {title} </p>
  )
}

export default VideoTitle;