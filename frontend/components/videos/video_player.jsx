import React from 'react';
import { connect } from 'react-redux';
import { getVideo } from '../../actions/videos';
import { resetErrors } from '../../actions/session';
import { withRouter } from 'react-router-dom';

import LikeButton from '../likes/like_button';

export class VideoPlayer extends React.Component{
  constructor(props){
    super(props)
    this.state = {};
    this.likers = this.likers.bind(this);
    this.likedByUser = this.likedByUser.bind(this);
    this.getUserLike = this.getUserLike.bind(this);
  }

  componentDidMount() {
    this.props.getVideo(this.props.video.id);
  }

  // get array of user ids that likes this video
  likers() {
    return Object.values(this.props.likes).map(like => {
      return like.liker_id;
    });
  }
  // determine if current user liked the video
  likedByUser() {
    let likers = this.likers();
    return likers.includes(this.props.user);
  }

  getUserLike() {
    let likers = this.likers();
    const allLikes = Object.values(this.props.likes).map((like) => {
      return like.id;
    });
    return allLikes[likers.indexOf(this.props.user)];
  }

  render(){
    let likeCount = Object.values(this.props.likes).length;
    let likeButton;
    if (Object.values(this.props.likes).length >= 1) {
      if (this.likedByUser()) {
        // display like button as selected
        likeButton = <LikeButton type="liked" like={this.props.likes[this.getUserLike()]} />
      } else {
        // display liked button as unselected
        likeButton = <LikeButton type="like" video_id={this.props.video.id} />
      };
    } else {
      // display liked button as unselected
      likeButton = <LikeButton type="like" video_id={this.props.video.id} resetErrors={this.props.resetErrors} />
    };
    return (
      <ul className="video-show">
        <video width="320" height="240" preload="metadata" controls="controls"
          src={`${this.props.video.video_url}`} type="video/mp4">
        </video>
        <li>{this.props.video.title}</li>
        <li>
          <div className="video-like-btn">
            {likeButton}
            <p>{likeCount}</p>
          </div>
        </li>
      </ul>
    )
  };
};

const msp = (state, ownProps) => {
  let _nullVideo = {
    title: 'no video found',
    body: '',
    video_url: 'https://i.stack.imgur.com/PtbGQ.png',
    id: ownProps.match.params.videoId,
    uploader: { id: null, username: 'not found' },
  };

  return {
    video: state.entities.videos[ownProps.match.params.videoId] || _nullVideo,
    likes: state.entities.likes,
    errors: state.session.errors,
  }
};

const mdp = dispatch => {
  return {
    getVideo: (videoId) => dispatch(getVideo(videoId)),
    resetErrors: () => dispatch(resetErrors()),
  }
};

export default withRouter(connect(msp, mdp)(VideoPlayer));