import React from "react";
import { connect } from "react-redux";
import { getVideo } from "../../actions/videos";
import { resetErrors } from "../../actions/session";
import { withRouter } from "react-router-dom";

import LikeButton from "../likes/like_button";
import VideoAndControls from "./video_controls";
import { getLikes } from "../../actions/like_actions";

export class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      user: this.props.video.uploader.id,
      errors: this.props.errors
    };

    this.likers = this.likers.bind(this);
    this.likedByUser = this.likedByUser.bind(this);
    this.getUserLike = this.getUserLike.bind(this);
  }

  componentDidMount() {
    this.props.resetErrors();
    this.props.getLikes(this.props.video.id);
    this.props.updateViewCount();
  }

  componentWillReceiveProps() {
    this.setState({ errors: this.state.errors });
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
    const allLikes = Object.values(this.props.likes).map(like => {
      return like.id;
    });
    return allLikes[likers.indexOf(this.props.user)];
  }

  render() {
    const likeCount = Object.values(this.props.likes).length;
    let userLike = this.props.likes[this.getUserLike()];
    let likeButton;
    let dislikeButton;

    if (likeCount >= 1) {
      if (this.likedByUser()) {
        let likeType = userLike.liked;
        // display like button as selected
        if (likeType === true) {
          likeButton = <LikeButton type="liked" like={userLike} />;
        } else if (likeType === false) {
          likeButton = <LikeButton type="disliked" like={userLike} />;
        } else {
          // display liked button as unselected
          likeButton = (
            <LikeButton type="unselected" video_id={this.props.video.id} />
          );
        }
      }
    } else {
      // display liked button as unselected
      likeButton = (
        <LikeButton
          type="unselected"
          video_id={this.props.video.id}
          resetErrors={this.props.resetErrors}
          user={this.props.user}
        />
      );
    }
    return (
      <ul className="video-show">
        {/* video source and controls */}
        <VideoAndControls
          source={this.props.video.video_url}
          thumbnail={this.props.video.thumbnail_url}
        />
        <li>{this.props.video.title}</li>
        <li className="video-views">{this.props.video.views} views</li>
        <li>{this.props.errors}</li>
        <li>
          <div className="video-like-btn">
            {likeButton}
            <p>{likeCount}</p>
          </div>
        </li>
      </ul>
    );
  }
}

const msp = (state, ownProps) => {
  let _nullVideo = {
    title: "no video found",
    body: "",
    video_url: "https://i.stack.imgur.com/PtbGQ.png",
    id: ownProps.match.params.videoId,
    uploader: { id: null, username: "not found" }
  };

  return {
    video: state.entities.videos[ownProps.match.params.videoId] || _nullVideo,
    likes: state.entities.likes,
    errors: state.session.errors
  };
};

const mdp = dispatch => {
  return {
    getVideo: videoId => dispatch(getVideo(videoId)),
    getLikes: videoId => dispatch(getLikes(videoId)),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(VideoPlayer)
);
