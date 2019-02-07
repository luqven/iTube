import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import VideoEditForm from "./video_edit_container";

const Form = ({isOnwer}) => {
  if (isOnwer) {
    return <VideoEditForm />;
  } else {
    return (<Redirect to="/" />)
  }
}

const msp = (state, ownProps) => {
  
  return {
    isOnwer: state.entities.users[state.session.id].channel_id === state.entities.videos[ownProps.match.params.videoId].channel_id,
  }
}

export default withRouter(connect(msp, null)(Form))