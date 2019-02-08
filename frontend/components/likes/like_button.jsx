import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getLikes, addLike, deleteLike } from '../../actions/like_actions';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: {
        user_id: this.props.user_id,
        video_id: this.props.video_id,
        liked: true,
      }
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.type === "liked") {
      this.props.deleteLike(this.props.like)
    } else {
      this.props.addLike(this.state.like)      
    }
  }

  render() {
    if (this.props.type === 'liked') {
      return <button onClick={this.handleClick}>Liked!</button>
    } else {
      return <button onClick={this.handleClick}>Like</button>
    }
  }
}

const msp = (state) => {
  return {
    user_id: state.session.id,
  }
};

const mdp = dispatch => {
  return {
    getLikes: (videoId) => dispatch(getLikes(videoId)),
    addLike: (like) => dispatch(addLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like)),
  }
}

export default connect(msp, mdp)(LikeButton)