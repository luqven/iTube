import { connect } from 'react-redux';
import { resetErrors } from "../../actions/session";
import { withRouter } from 'react-router-dom';
import { addComment } from "../../actions/comment_actions"
import CommentForm from "./comment_form";

const msp = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.id]
  let currentVideo = state.entities.videos[ownProps.match.params.videoId]
  // let videoComments = state.entities.comments.map((comment, id) => {
  //   if (comment.video_id === currentVideo.id) {return comment}
  // })
  return{
    user: currentUser,
    video: currentVideo,
    errors: state.errors,
    type: "add",
    // comments: videoComments,
  }
}

const mdp = dispatch => {
  return {
    addComment: comment => dispatch(addComment(comment)),
    resetErrors: () => dispatch(resetErrors())
  }
}

export default withRouter(connect(msp, mdp)(CommentForm));
