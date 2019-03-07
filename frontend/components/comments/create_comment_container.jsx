import { connect } from 'react-redux';
import { resetErrors } from "../../actions/session";
import { withRouter } from 'react-router-dom';
import { addComment } from "../../actions/comment_actions"
import CommentForm from "./comment_form";

const msp = (state, ownProps) => {
  let currentUser = state.session.id
  // let videoComments = state.entities.comments.map((comment, id) => {
  //   if (comment.video_id === currentVideo.id) {return comment}
  // })
  return{
    user_id: currentUser,
    video_id: Number(ownProps.match.params.videoId),
    comment: {body: "", video_id: null, user_id: null},
    errors: state.errors,
    type: "comment",
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
