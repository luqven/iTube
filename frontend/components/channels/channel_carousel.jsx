import React from 'react'
import VideoPreview from '../videos/video_preview_container';

export default class ChannelCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lis = this.props.channel.videoIds.map((videoId, idx) => {
      return <VideoPreview videoId={videoId} key={idx} />
    })
    return (
      <div className="showpage-video-carousel">
          <ul className="show-video-carousel">
            {lis}
          </ul>
      </div>
    )
  }
}