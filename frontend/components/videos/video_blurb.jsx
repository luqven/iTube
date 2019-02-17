import React from 'react';

 const VideoBlurb = (props) => {
    let videoBody = props.videoBody;
    let relevantPath = props.videoPath;
    // render only when the url has search
   if (videoBody != undefined && relevantPath === "search") {
      return (
        <div className="search-blurb-container">
          <p className="search-blurb">{videoBody}</p>
        </div>
      )
    }
    return null;
  }


export default VideoBlurb;