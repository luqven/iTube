import React from 'react';
import ChannelCarousel from '../channels/channel_carousel';
import { Link } from 'react-router-dom';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
      channels: this.props.channels,
    };
  }

  componentDidMount(){
    this.props.getAllVideos();
    this.props.getAllChannels();
  }

  render() {
    let channels;
    if (this.props.videos.length >= 2){
      channels = this.props.channels.map((channel, idx) => {
        if(channel.videoIds.length > 0){
        return (
          <ChannelCarousel channel={channel} classId={idx} key={idx} userId={channel.owner_id} />
        )} else {
          return null;
        }
      })
    }

    return (
        <ul className="home-container">
            <h2>Channels</h2>
            {channels}
        </ul>
    )
  }
}

export default Home;