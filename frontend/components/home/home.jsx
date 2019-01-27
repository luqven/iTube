import React from 'react';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.props.getAllVideos();
  }

  render() {
    const videoList = []
    let videos = this.props.videos.forEach(video => {
      videoList.push(video.title);
    });
    const lis = videoList.map((video, idx) => {
      return (
        <div key={idx / 1.12 + 1} className="temp-image-container">
          <img key={idx / 1.1 + 1} className="temp-image" src="https://i.stack.imgur.com/PtbGQ.png" alt="" srcSet="" />
          <li key={idx}>{video}</li>
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