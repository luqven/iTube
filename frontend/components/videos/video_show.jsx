import React from "react";
import VideoPlayer from "./video_player";
import VideoDetails from "./video_details";
import CommentForm from "../comments/create_comment_container";
import CommentsShow from "../comments/comments_show_container";
import UpNext from "./up_next/up_next_container";

export default class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.video,
      videoUrl: this.props.video.video_url,
      views: this.props.video.views || null
    };
    this.updated = false;
    this.updateViewCount = this.updateViewCount.bind(this);
  }

  componentDidMount() {
    this.props.getVideo(this.props.videoId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.video.title !== this.props.video.title) {
      let curViews = this.props.video.views;
      this.updateViewCount(curViews);
    }
  }

  updateViewCount(curViews) {
    let currentViews = curViews ? curViews : this.props.video.views;
    if (currentViews === undefined) {
      return;
    }
    console.log(currentViews);
    currentViews += 1;
    console.log(currentViews);

    let formData = new FormData();
    formData.append("video[id]", this.props.video.id);
    formData.append("video[play_count]", currentViews);
    this.updated = true;
    this.props
      .updateVideo(formData)
      .then(this.setState({ views: currentViews }));
  }

  render() {
    return (
      <div className="video-show-grid">
        <div className="video-show-container">
          <VideoPlayer
            user={this.props.user}
            errors={this.props.errors}
            resetErrors={this.props.resetErrors}
            updateViewCount={this.updateViewCount}
          />
          <VideoDetails />
          {/* comments add/edit */}
          <CommentForm />
          {/* comments show */}
          <CommentsShow />
          {/* up next component */}
        </div>
        <UpNext />
      </div>
    );
  }
}
