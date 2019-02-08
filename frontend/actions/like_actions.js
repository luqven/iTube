import { fetchLikes, postLike, destroyLike } from '../utils/like';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = payload => {
  return {
    type: RECEIVE_LIKE,
    payload,
  };
};

export const receiveLikes = payload => {
  return {
    type: RECEIVE_LIKES,
    payload,
  };
};

export const removeLike = payload => {
  return {
    type: REMOVE_LIKE,
    payload,
  };
};

export const getLikes = (videoId) => dispatch => {
  return fetchLikes(videoId).then(
    likes => dispatch(receiveLikes(likes))
  )
}

export const addLike = (like) => dispatch => {
  return postLike(like).then(
    like => dispatch(receiveLike(like))
  )
}

export const deleteLike = (like) => dispatch => {
  return destroyLike(like).then(
    like => dispatch(removeLike(like))
  )
}