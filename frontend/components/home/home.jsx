import React from 'react';
import { Link } from 'react-router-dom';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: this.props.videos};
  }

  componentDidMount(){
    this.props.getAllVideos();
  }

  render() {
    const lis = this.props.videos.map((video, idx) => {
      return (
        <div key={idx / 1.12 + 1} className="temp-image-container">
          <img key={idx / 1.1 + 1} className="temp-image" src="https://i.stack.imgur.com/PtbGQ.png" alt="" srcSet="" />
          <li key={idx}> <Link to={`videos/${video.id}`} >{video.title}</Link></li>
        </div>
      )
    })
    

    return (
      <section className="home-container">
        {/* <Modal /> */}
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