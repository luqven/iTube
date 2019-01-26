export const RECEIVE_USER_VIDEOS = "RECEIVE_USER_VIDEOS";
import { fetchUserVideos } from "../utils/video";

export const receiveUserVideos = videos => {
  return {
    type: RECEIVE_USER_VIDEOS,
    videos,
  };
};

export const getUserVideos = userId => dispatch => {
  return fetchUserVideos(userId).then(
    videos => dispatch(receiveUserVideos(videos))
  );
};