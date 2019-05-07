import React from "react";
import VideoList from "./video_list";

export default class UpNext extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channelVideos: undefined, videos: undefined };
  }

  componentDidUpdate(prevPops) {
    if (this.props.channelId && prevPops.channelId !== this.props.channelId) {
      this.props
        .getChannel(this.props.channelId)
        .then(this.setState({ videos: this.props.videos }));
    }
  }

  render() {
    let videos;
    if (Object.values(this.props.videos).length > 1) {
      videos = (
        <VideoList
          channelVideos={this.props.videos}
          channelId={this.props.channelId}
          videoId={this.props.videoId}
        />
      );
    }

    return (
      <div className="up-next-container video-show-grid-col3">
        {/* <div className="loading" /> */}
        {videos}
      </div>
    );
  }
}
