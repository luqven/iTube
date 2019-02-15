import React from 'react'
import { withRouter } from 'react-router-dom';
import VideoPreview from '../videos/video_preview_container';

class ChannelCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const videoPreviews = this.props.channel.videoIds.map((videoId, idx) => {
      return <VideoPreview videoId={videoId} key={idx} />
    })

    return (
      <> 
      {/* li acts as spacer for top of channel carousel */}
        <li className="show-video-carousel">
        </li>
        {/* the channe's video carousel */}
        <div id="home-carousel-container">
          <li className= "preview-carousel">
            {videoPreviews}
          </li>
        </div>
      </>
    )
  }
}

export default withRouter(ChannelCarousel)