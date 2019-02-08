import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getLikes, addLike, deleteLike } from '../../actions/like_actions';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.videoId,
      liked: this.props.liked,
      like: this.props.like,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.liked) {
      this.props.deleteLike(this.props.like)
    } else {
      this.props.addLike(this.props.like)      
    }
  }

  render() {
    let text;
    if (this.state.liked) {
      text = 'Liked'
    } else {
      text = 'Like'
    }
    return(
      <button onClick={this.handleClick}>{text}</button>
    )
  }
}

const msp = (state) => {
  return {
  }
};

const mdp = dispatch => {
  return {
    getLikes: (videoId) => dispatch(getLikes(videoId)),
    addLike: (like) => dispatch(addLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like)),
  }
}

export default connect(null, mdp)(LikeButton)