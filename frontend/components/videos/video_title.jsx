import React from 'react'

export const VideoTitle = ({ title, update }) => {
  return (
    <p onClick={update} > {title} </p>
  )
}

export default VideoTitle;