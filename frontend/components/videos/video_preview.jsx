import React from 'react';
import ChannelName from '../user_show/user_circle_container';
import VideoThumbnail from './video_thumbnail';
import VideoTitle from './video_title';

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
                // the video's preview image container
                <div key={this.props.videoId / 1.12 + 1} className="temp-image-container">
                {/* the actual preview image */}
                    <VideoThumbnail update={this.updateHistory} imgSrc={`${video.thumbnail_url}`} key={this.props.videoId / 1.1 + 1} />
                    {/* the video's title */}
                    <VideoTitle update={this.updateHistory} title={video.title} />
                    {/* the channel name displayed under the vieo */}
                    <ChannelName userId={video.uploader.id} />
                </div>
            )
        }
        return null;
    }
}