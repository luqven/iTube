import React from "react";

export default class VideoTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewCount: this.props.video.views };
  }

  render() {
    let viewText = "views";
    if (this.props.video.views < 2) {
      viewText = "view";
    }
    return (
      <>
        <p className="video-title" onClick={this.props.updateHistory}>
          {this.props.video.title}
        </p>
        <p className="video-views">
          {this.props.video.views} {viewText}
        </p>
      </>
    );
  }
}
