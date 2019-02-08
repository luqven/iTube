import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getLikes, addLike, deleteLike } from '../../actions/like_actions';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: {
        user_id: this.props.user_id,
        video_id: this.props.video_id,
        liked: true,
      },
      errors: this.props.errors,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidUpdate() {
  //   this.setState({ errors: this.props.errors })
  // }

  handleClick() {
    if (this.props.type === "liked") {
      this.props.deleteLike(this.props.like)
    } else {
      this.props.addLike(this.state.like).then(
        this.setState({ errors: this.props.errors })
      )      
    }
  }

  render() {
    let errors = this.props.errors.map((error, idx) => {
      return <li key={idx}>{error}</li>
    })
    if (this.props.type === 'liked') {
      // return <button className="button-liked" onClick={this.handleClick}>Liked!</button>
      return (
        <>
          <FontAwesomeIcon icon="thumbs-up" className="button-liked" onClick={this.handleClick} />
          <div className="error-message">
            <ul>
                {errors}
            </ul>
          </div>
        </>
      )
    } else {
      // return <button className="button-like" onClick={this.handleClick}>Like</button>
      return (
        <>
          <FontAwesomeIcon icon="thumbs-up" className="button-like" onClick={this.handleClick} />          
          <div className="error-message">
            <ul>
              {errors}
            </ul>
          </div>
        </>
      )
    }
  }
}

const msp = (state) => {
  return {
    user_id: state.session.id,
    errors: state.errors.session,
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