import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getComments, updateComment } from "../../actions/comment_actions";
import CommentsShow from "./comments_show";

const msp = (state, ownProps) => {
  let videoComments;
  videoComments = Object.values(state.entities.comments).map((comment) => {
    if (comment.video_id === Number(ownProps.match.params.videoId)) { return comment }
    else {return null}
  })
  return{
    comments: videoComments,
    video_id: ownProps.match.params.videoId,
    session_id: state.session.id
  }
}

const mdp = dispatch => {
  return{
    getComments: videoId => dispatch(getComments(videoId)),
    updateComment: comment => dispatch(updateComment(comment))
  }
}

export default  withRouter(connect(msp, mdp)(CommentsShow))