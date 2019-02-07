import React from 'react';

export default class VideoPreview extends React.Component {
    constructor(props) {
        super(props)
        this.updateHistory = this.updateHistory.bind(this);
    }

    updateHistory() {
        this.props.history.push(`/videos/${this.props.videoId}`)
    }

    componentDidMount() {
        this.props.getVideo(this.props.videoId)
    }

    render() {
        if (Object.values(this.props.videos).length >= 1) {
            const video = this.props.videos[this.props.videoId]
            return (
                <div key={this.props.videoId / 1.12 + 1} className="temp-image-container">
                    <img onClick={this.updateHistory} key={this.props.videoId / 1.1 + 1}
                        className="temp-image"
                        src={`${video.thumbnail_url}`} />
                    <p onClick={this.updateHistory}> {video.title} </p>
                </div>
            )
        }
        return null;
    }
}