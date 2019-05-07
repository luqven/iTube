import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UpNext from "./up_next";
const msp = state => {
  return {};
};

const mdp = dispatch => {
  return {};
};

export default connect(
  msp,
  mdp
)(UpNext);
