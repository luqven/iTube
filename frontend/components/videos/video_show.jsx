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
      videoUrl: this.props.video.video_url
    };
  }

  componentDidMount() {
    let timeForViewCount = 5000; // ms
    this.props.getVideo(this.props.video.id).then(
      setTimeout(() => {
        let formData = new FormData();
        let currentViews = this.props.video.views;
        if (this.props.video.views === undefined) {
          currentViews = 0;
          debugger;
        }
        currentViews += 1;
        formData.append("video[id]", this.props.video.id);
        formData.append("video[play_count]", currentViews);
        this.props.updateVideo(formData);
      }, timeForViewCount)
    );
  }

  render() {
    return (
      <div className="video-show-grid">
        <div className="video-show-container">
          <VideoPlayer
            user={this.props.user}
            errors={this.props.errors}
            resetErrors={this.props.resetErrors}
            updateViews={this.props.updateVideo}
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
