import React from 'react'
import { withRouter } from 'react-router-dom';
import VideoPreview from '../../videos/video_preview_container';
// matched_query=
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const urlIds = this.props.history.location.pathname.split('/search/')
    const matchedIds = urlIds[1].split('_id_')[1];
    let videoPreviews;
    if (typeof matchedIds === "string") {
      videoPreviews = <VideoPreview videoId={parseInt(matchedIds)} /> 
    } else {
      svideoPreviews = matchedIds.map((videoId, idx) => {
        return <VideoPreview classId={"search" }videoId={parseInt(videoId)} key={idx} />
     })
    };

    return (
        <div className="search-reults-container">
              {videoPreviews}
        </div>
    )
  };
};

export default withRouter(SearchResults)