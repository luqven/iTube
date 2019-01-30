export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO"
import { fetchAllVideos, fetchChannel, fetchVideo } from "../utils/video";


export const receiveAllVideos = payload => {
  return {
    type: RECEIVE_VIDEOS,
    payload,
  };
};

export const receiveVideo = payload => {
  return {
    type: RECEIVE_VIDEO,
    payload,
  }
}

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