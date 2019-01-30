import React from 'react'
import VideoPreview from '../videos/video_preview_container';
import UserProfile from "../user_show/profile_page_container"

export default class Channel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            channel: this.props.channel,
            videos: this.props.channel.videos,
        }
    }

    componentWillMount(){
        this.props.getAllChannels()
    }

    componentDidMount() {
        this.props.closeModal()
        this.props.getChannel(this.props.channelId)
        this.setState({
            channel: this.props.channel,
            videos: this.props.channel.videos
        })
    }

    render() {
        const videos = this.state.videos
        const lis = videos.map((video, idx) => {
            <VideoPreview videoId={video.id} title={video.title} key={idx} />
        })
        return(
            <div className="channel-container">
                <UserProfile />
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