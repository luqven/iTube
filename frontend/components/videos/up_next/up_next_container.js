import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UpNext from "./up_next";
import { getChannel } from "../../../actions/channel_actions";

const msp = (state, ownParams) => {
  let videos = state.entities.videos;
  let videoId = Number(ownParams.match.params.videoId);
  return {
    videoId: videoId,
    channelId:
      Object.values(videos).length > 0 ? videos[videoId].channel_id : undefined,
    videos: state.entities.videos
  };
};

const mdp = dispatch => {
  return {
    getChannel: channelId => dispatch(getChannel(channelId))
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(UpNext)
);
