import React from 'react'
import { withRouter } from 'react-router-dom';
import VideoPreview from '../videos/video_preview_container';
import UserCircle from '../user_show/user_circle_container';

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
        <li className="show-video-carousel">
        <UserCircle userId={this.props.userId}/>
        </li>
        <div id="home-carousel-container">
        <li className= "preview-carousel">
          {videoPreviews}
          </li></div>
      </>
    )
  }
}

export default withRouter(ChannelCarousel)