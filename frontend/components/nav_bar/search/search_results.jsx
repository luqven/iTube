import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import VideoPreview from '../../videos/video_preview_container';
import { getAllVideos } from '../../../actions/videos';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.getAllVideos();
  }

  render() {
    const urlIds = this.props.history.location.pathname.split('/search/')
    const matchedIds = urlIds[1].split('_id_');
    let videoPreviews;
      videoPreviews = matchedIds.map((videoId, idx) => {
        if (idx > 0) {
          return (
          <VideoPreview videoId={parseInt(videoId)} key={idx} />
          )
        }
     });

    return (
        <div className="search-reults-container">
              {videoPreviews}
        </div>
    )
  };
};

const mdp = dispatch => {
  return {
    getAllVideos: () => dispatch(getAllVideos())
  }
}

export default withRouter(connect(null, mdp)(SearchResults))