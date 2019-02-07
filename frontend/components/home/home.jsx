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

    // const lis = this.props.videos.map((video, idx) => {
    //   return (
    //     <div key={idx / 1.12 + 1} className="temp-image-container">
    //       <img key={idx / 1.1 + 1} className="temp-image" src={`${video.thumbnail_url}`} alt="" srcSet="" />
    //       <li key={idx}> <Link to={`videos/${video.id}`} >{video.title}</Link></li>
    //     </div>
    //   )
    // })
    
    
    const lis = this.props.channels.map((channel, idx) => {
      
      return (
        <div key={idx / 1.12 + 1} >
          <ChannelCarousel channel={channel} key={idx} />
          <li key={idx / 1.1 + 1} >hello</li>
        </div>
      )
    })

    return (
      <section className="home-container">
        <div >
          <ul className="video-carousel">
            {lis}
          </ul>
        </div>
      </section>
    )
  }
}

export default Home;