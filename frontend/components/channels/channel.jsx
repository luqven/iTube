import React from 'react'
import VideoPreview from '../videos/video_preview_container';
import UserProfile from "../user_show/profile_page_container"

export default class Channel extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.closeModal();
        this.props.getChannel(this.props.channelId);
        this.props.getAllUsers();
        this.props.getAllVideos();
    }

    render() {
        const lis = this.props.videos.map((video, idx) => {
            if (this.props.channel.id === video.channel_id) {
                return <VideoPreview videoId={video.id} thumbnail_url={video.thumbnail_url} title={video.title} key={idx} />
            }
        })

        return(
            <div className="channel-container">
                <UserProfile user={this.props.owner}/>
                <section className="categories">
                    {/* <Modal /> */}
                    <div className="showpage-video-carousel">
                        <ul className="show-video-carousel">
                            {lis}
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}