export const RECEIVE_USER_VIDEOS = "RECEIVE_USER_VIDEOS";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
import { fetchAllVideos, fetchUserVideos } from "../utils/video";

export const receiveUserVideos = videos => {
  return {
    type: RECEIVE_USER_VIDEOS,
    videos,
  };
};

export const receiveAllVideos = videos => {
  return {
    type: RECEIVE_VIDEOS,
    videos,
  };
};

export const getUserVideos = userId => dispatch => {
  return fetchUserVideos(userId).then(
    videos => dispatch(receiveUserVideos(videos))
  );
};

export const getAllVideos = () => dispatch => {
  return fetchAllVideos().then(
    videos => dispatch(receiveAllVideos(videos))
  );
};