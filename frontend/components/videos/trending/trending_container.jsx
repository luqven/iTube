import { connect } from "react-redux";
import Trending from "./trending";
import { getAllVideos } from "../../../actions/videos";

const msp = state => {
  return {
    videos: state.entities.videos
  };
};

const mdp = dispatch => {
  return {
    getAllVideos: () => dispatch(getAllVideos())
  };
};

export default connect(
  msp,
  mdp
)(Trending);
