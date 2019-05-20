import React from "react";
import ChannelName from "../user_show/user_circle_container";
import VideoThumbnail from "./video_thumbnail";
import VideoTitle from "./video_title";
import VideoBlurb from "./video_blurb";

export default class VideoPreview extends React.Component {
  constructor(props) {
    super(props);
    this.updateHistory = this.updateHistory.bind(this);
  }

  updateHistory() {
    this.props.history.push(`/videos/${this.props.videoId}`);
  }

  componentDidMount() {
    // this.props.getVideo(this.props.videoId)
  }

  render() {
    // TODO: change the iteration to be in the container
    let className = `temp-image-container  ${
      this.props.match.path.split("/")[1]
    }`;
    // render only when there are videos in its slice of state
    const currentVideo = this.props.videos[this.props.videoId];
    if (currentVideo != undefined) {
      return (
        // the video's preview image container
        <div
          key={this.props.videoId / 1.12 + 1}
          className={className}
          id={`cp-${this.props.owner}-${this.props.carouselPos}`}
        >
          {/* the actual preview image */}
          <VideoThumbnail
            update={this.updateHistory}
            imgSrc={`${currentVideo.thumbnail_url}`}
            key={this.props.videoId / 1.1 + 1}
          />
          {/* the video's title */}
          <VideoTitle updateHistory={this.updateHistory} video={currentVideo} />
          {/* the channel name displayed under the video */}
          <div className="preview-channel-name">
            <ChannelName
              userId={currentVideo.uploader.id}
              owner={this.props.owner}
            />
          </div>
          {/* the body blurb displayed under the channel name */}
          <VideoBlurb
            videoBody={currentVideo.body}
            videoPath={this.props.match.path.split("/")[1]}
          />
        </div>
      );
    }
    return null;
  }
}
