import React from 'react';
import ChannelName from '../user_show/user_circle_container';

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
        // TODO: change the iteration to be in the container
        if (Object.values(this.props.videos).length >= 1) {
            const video = this.props.videos[this.props.videoId]
            return (
                // TODO: break this out into another component
                // the video's preview image container
                <div key={this.props.videoId / 1.12 + 1} className="temp-image-container">
                {/* the actual preview image */}
                    <img onClick={this.updateHistory} key={this.props.videoId / 1.1 + 1}
                        className="temp-image"
                        src={`${video.thumbnail_url}`} />
                    {/* the video's title */}
                    <p onClick={this.updateHistory}> {video.title} </p>
                    {/* the channel name displayed under the vieo */}
                    <ChannelName userId={video.uploader.id} />
                </div>
            )
        }
        return null;
    }
}