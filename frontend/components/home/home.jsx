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
    const channels = this.props.channels.map((channel, idx) => {
      return (
        <ChannelCarousel channel={channel} classId={idx} key={idx} userId={channel.owner_id} />
      )
    })

    return (
      <ul className="home-container">
          {channels}
      </ul>
    )
  }
}

export default Home;