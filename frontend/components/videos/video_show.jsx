import React from 'react';

export default class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.video,
      videoUrl: this.props.video.video_url
    };
  }

  componentDidMount(){
    this.props.getVideo(this.props.video.id)
  }

  render() {
    return (
      <ul className="video-show">
        <video width="320" height="240" controls>
          <source src={`${this.state.videoUrl}`} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
        <li>{this.state.video.title}</li>
      </ul>
    )
  }


}