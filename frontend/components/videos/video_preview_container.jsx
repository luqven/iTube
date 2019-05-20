import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import VideoPreview from "./video_preview";
import { getVideo, updateVideo } from "../../actions/videos";

const msp = state => {
  return {
    videos: state.entities.videos
  };
};

const mdp = dipsatch => {
  return {
    getVideo: videoId => dipsatch(getVideo(videoId))
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(VideoPreview)
);
