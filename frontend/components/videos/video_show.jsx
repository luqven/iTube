import React from 'react';
import VideoPlayer from './video_player';
import VideoDetails from './video_details';
import CommentForm from '../comments/create_comment_container';

export default class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.video,
      videoUrl: this.props.video.video_url,
    };
    this.videoPause = this.videoPause.bind(this);
  }

  videoPause(e) {
      let video = document.getElementsByTagName('video')[0]
      let spacebar = 32

      if (e.keyCode === spacebar) {
        // ternary that determines whether to pause or unpause video
        video.paused ? video.play() : video.pause();
      }
  }

  componentDidMount(){
    this.props.getVideo(this.props.video.id).then(
      // setTimeout(() => this.props.getLikes(this.props.user_id), 500)
    )
    document.addEventListener('keydown',this.videoPause)
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.videoPause);
  }

  render() {
    return (
      <div className="video-show-container">
        <VideoPlayer user={this.props.user} errors={this.props.errors} resetErrors={this.props.resetErrors}/>
        <VideoDetails />
        {/* comments */}
        <CommentForm />
      </div>
    )
  }


}