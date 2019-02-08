import React from 'react';
import LikeButton from '../likes/like_button';

export default class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.video,
      videoUrl: this.props.video.video_url
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.getVideo(this.props.video.id)
  }

  handleClick(){
    this.props.history.push(`/update/${this.props.video.id}`)
  }


  render() {
    let userInitial = this.props.video.uploader.username[0].toUpperCase();
    let button;
    if(this.props.user === this.props.video.uploader.id) {
      button = <button onClick={this.handleClick} className="edit-btn">Edit Video</button>
    }
    return (
      <div className="video-show-container">
        <ul className="video-show">
          <video width="320" height="240" preload="metadata" controls="controls" 
          src={`${this.props.video.video_url}`} type="video/mp4">
        </video>
          <li>{this.props.video.title}</li>
        </ul>
        <div className = "video-user-info">
          <div className="dropdown-user-icon">
            <p>{userInitial}</p>
            <p className="user-initial">{this.props.video.uploader.username}</p>
          </div>
          <h3 className="video-text">{this.props.video.body}</h3>
          <div className="video-like-btn">
            <LikeButton liked={false} videoId={this.props.video.id} />
          </div>
          <div className="video-edit-btns">
            {button}
          </div>
        </div>
      </div>
    )
  }


}