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
    document.addEventListener('keydown', e => {
      debugger
      let video = document.getElementsByTagName('video')[0]
      let spacebar = 32
      if (e.keyCode === spacebar) {
        debugger
        // ternary that determines whether to pause or unpause video
        video.paused ? video.play() : video.pause();
      }
    })
  }

  componentWillUnmount(){
    document.removeEventListener('keydown');
  }

  render() {
    return (
      <div className="video-show-container">
        <VideoPlayer user={this.props.user} errors={this.props.errors} resetErrors={this.props.resetErrors}/>
        <VideoDetails />
      </div>
    )
  }


}