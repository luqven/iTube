import { fetchComments, postComment, destroyComment } from '../utils/comment';
import { receiveErrors } from "./session";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = payload => {
  return {
    type: RECEIVE_COMMENT,
    payload,
  };
};

export const receiveComments = payload => {
  return {
    type: RECEIVE_COMMENTS,
    payload,
  };
};

export const removeComment = payload => {
  return {
    type: REMOVE_COMMENT,
    payload,
  };
};

export const getComments = (videoId) => dispatch => {
  return fetchComments(videoId).then(
    comments => dispatch(receiveComments(comments))
  )
}

export const addComment = (comment) => dispatch => {
  return postComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const deleteComment = (comment) => dispatch => {
  return destroyComment(comment).then(
    comment => dispatch(removeComment(comment))
  )
}