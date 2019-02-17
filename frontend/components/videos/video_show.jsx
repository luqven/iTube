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
    // this.handleClick = this.handleClick.bind(this);
    // this.likers = this.likers.bind(this);
    // this.likedByUser = this.likedByUser.bind(this);
    // this.getUserLike = this.getUserLike.bind(this);
  }

  componentDidMount(){
    // this.props.getVideo(this.props.video.id).then(
    // this.props.getLikes(this.props.video.id));
  }

  render() {
    return (
      <div className="video-show-container">
        <VideoPlayer 
          // video={this.props.video}
          // likes={this.props.likes}
          // resetErrors={this.props.resetErrors}
        />
        <VideoDetails 
          // video={this.props.video}
          // user={this.props.user}
          // handleClick={this.handleClick}
        />
      </div>
    )
  }


}