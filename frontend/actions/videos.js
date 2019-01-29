export const RECEIVE_USER_VIDEOS = "RECEIVE_USER_VIDEOS";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO"
import { fetchAllVideos, fetchUserVideos, fetchVideo } from "../utils/video";

export const receiveUserVideos = user => {
  return {
    type: RECEIVE_USER_VIDEOS,
    user,
  };
};

export const receiveAllVideos = videos => {
  return {
    type: RECEIVE_VIDEOS,
    videos,
  };
};

export const receiveVideo = video => {
  return {
    type: RECEIVE_VIDEO,
    video,
  }
}

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

export const getVideo = videoId => dispatch => {
  return fetchVideo(videoId).then(
    video => dispatch(receiveVideo(video))
  )
}