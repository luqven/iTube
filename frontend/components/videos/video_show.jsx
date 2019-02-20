import React from 'react';
import VideoPlayer from './video_player';
import VideoDetails from './video_details';

export default class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.video,
      videoUrl: this.props.video.video_url,
    };
  }

  componentDidMount(){
    this.props.getVideo(this.props.video.id).then(
      this.props.getLikes(this.props.video.id)
    )
  }

  render() {
    return (
      <div className="video-show-container">
        <VideoPlayer user={this.props.user}/>
        <VideoDetails />
      </div>
    )
  }


}