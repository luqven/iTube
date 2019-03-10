import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getVideo } from '../../actions/videos';
import { Link } from 'react-router-dom';
import { getLikes } from '../../actions/like_actions';
import { channelIcon } from "../channels/channel_icon"


export class VideoDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    // this.props.getVideo(this.props.video.id);
    // this.props.getLikes(this.props.video.id)
  }

  handleClick() {
    this.props.history.push(`/update/${this.props.video.id}`)
  }

  render(){
  let editButton;
  let video = this.props.video;
  let user = this.props.user;
  let userInitial = video.uploader.username[0].toUpperCase();

  // if user is logged in render the edit button
  if (user === video.uploader.id) {
    editButton = <button onClick={this.handleClick} className="edit-btn">Edit Video</button>
  }
  return (
    <div className="video-user-info">
      <Link to={`/channel/${video.channel_id}/${video.uploader.id}`}>
        <div 
        className="dropdown-user-icon" 
        onClick={e => this.history.push(`/channel/${video.channel_id}/${video.uploader.id}`)}>
          <p>{userInitial}</p>
            <p className="user-initial">{video.uploader.username}</p>
        </div>
      </Link>
      <h3 className="video-text">{video.body}</h3>
      <div className="video-edit-btns">
        {editButton}
      </div>
    </div>
    )
  }
}



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
    user: state.session.id,
  }
};

const mdp = dispatch => {
  return {
    getVideo: (videoId) => dispatch(getVideo(videoId)),
    getLikes: (userId) => dispatch(getLikes(userId))
  }
};

export default withRouter(connect(msp, mdp)(VideoDetails));