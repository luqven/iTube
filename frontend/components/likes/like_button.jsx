import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      },
      errors: this.props.errors,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
  }

  handleClick(type) {
    // redirect to login if no logged in user
    if (this.props.user === null) {this.props.history.push('/login/')}
    if (this.props.type === "liked" || this.props.type === "disliked" ) {
      this.props.deleteLike(this.props.like)
    } else {
      let like = this.state.like
      like.liked = type
      debugger
      this.props.addLike(like).then(
        this.setState({ errors: this.props.errors })
      )      
    }
  }

  render() {
    let errors = this.props.errors.map((error, idx) => {
      return <li className="video-error" key={idx}>{error}</li>
    })
    if (this.props.type === 'liked') {
      return (
        <>
          <FontAwesomeIcon icon="thumbs-up" className="button-liked" onClick={e => this.handleClick(true)} />
          <div className="error-message">
          </div>
          <FontAwesomeIcon icon="thumbs-down" className="button-like" onClick={e => this.handleClick(false)} />
          <div className="error-message">
          </div>
        </>
      )
    } else if (this.props.type === 'disliked') { 
      return(
        <>
          <FontAwesomeIcon icon="thumbs-up" className="button-like" onClick={e => this.handleClick(true)} />
          <div className="error-message">
          </div>
          <FontAwesomeIcon icon="thumbs-down" className="button-liked" onClick={e => this.handleClick(false)} />
          <div className="error-message">
          </div>
        </>
      )
    } else {
      return (
        <>
          <FontAwesomeIcon icon="thumbs-up" className="button-like" onClick={ e => this.handleClick(true)} />
          <div className="error-message">
          </div>
          <FontAwesomeIcon icon="thumbs-down" className="button-like" onClick={ e => this.handleClick(false)} />          
          <div className="error-message">
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

export default withRouter(connect(msp, mdp)(LikeButton))