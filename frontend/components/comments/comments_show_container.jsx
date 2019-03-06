import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getComments } from "../../actions/comment_actions";
import CommentsShow from "./comments_show";

const msp = (state, ownProps) => {
  return{
    comments: Object.values(state.entities.comments),
    video_id: ownProps.match.params.videoId
  }
}

const mdp = dispatch => {
  return{
    getComments: videoId => dispatch(getComments(videoId))
  }
}

export default  withRouter(connect(msp, mdp)(CommentsShow))