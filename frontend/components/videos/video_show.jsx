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
    this.props.getVideo(this.props.video.id);
    // .then(
    // setTimeout(() => this.props.getLikes(this.props.user_id), 500)
    // )
  }

  render() {
    return (
      <div className="video-show-grid">
        <div className="video-show-container">
          <VideoPlayer
            user={this.props.user}
            errors={this.props.errors}
            resetErrors={this.props.resetErrors}
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
