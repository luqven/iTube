import React from 'react'
import { withRouter } from 'react-router-dom';
import VideoPreview from '../../videos/video_preview_container';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
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

export default withRouter(SearchResults)