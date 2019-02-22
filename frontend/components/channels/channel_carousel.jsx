import React from 'react'
import { withRouter } from 'react-router-dom';
import VideoPreview from '../videos/video_preview_container';
import ChannelIcon from './channel_icon';

class ChannelCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewComponents: [],
      carouselClicks: 0,
      carouselPos: 0,
      renderRight: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    const comps = this.getPreviews();
    this.setState({ previewComponents: comps });
    // show buttons on window resize
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.car = document.querySelector(".preview-carousel")
    this.containerWidth = this.car.offsetHeight
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleClick(e, type){
    // if first time button was clicked
    if (this.state.carouselClicks === 0) {
      let leftBtn = document.getElementById(`leftArr${this.props.channel.owner_id}`);
      leftBtn.classList = leftBtn.classList = "home-channel-scroll-btn inactive"
    }
    let button = e.currentTarget;
    let offset = this.containerWidth;
    if (type === 'left') { offset = offset * - 1}
    this.car = document.querySelectorAll(".preview-carousel")[this.props.classId];
  
    this.car.scrollBy({
      top: offset,
      left: 0,
      behavior: 'smooth'
    });
    // set background of button to grey
    button.classList = "home-channel-scroll-btn active";
    // set background transparent again
    setTimeout(() => { button.classList = "home-channel-scroll-btn inactive"}, 200);
  };

  getPreviews(){
    let components =  this.props.channel.videoIds.map((videoId, idx) => {
      return <VideoPreview videoId={videoId} key={idx} carouselPos={idx} owner={this.props.channel.owner_id}/>
    })
    return components
  }

  handleResize() {
    this.car = document.querySelector(".preview-carousel")
    this.containerWidth = this.car.offsetHeight
    if (window.innerWidth < 1418) { 
      this.setState({ renderRight: true})
    } else {
      this.setState({ renderRight: false })
    }
  }

  render() {
    let rightButton =( <button onClick={(e) => this.handleClick(e, "right")} className="home-channel-scroll-btn" id={`rightArr${this.props.channel.owner_id}`}>
                            <p className="arrow-right"><i className="arrow-icon"></i></p>
                        </button>)
    let leftButton = (<button onClick={(e) => this.handleClick(e, "left")} className="home-channel-scroll-btn hidden" id={`leftArr${this.props.channel.owner_id}`}>
                        <p className="arrow-left"><i className="arrow-icon"></i></p>
                      </button>)
    const videoPreviews = this.state.previewComponents
    // do not render buttons if less than 5 videos on page
  if (videoPreviews.length < 6 && this.state.renderRight === false) { rightButton = <div className="placeholder-btn"></div> };
    return (
      <> 
        <div className="channel-carousel" id={`channel-carousel${this.props.channel.owner_id}`}>
            <ChannelIcon userId={this.props.channel.owner_id} />
          {/* the channels video carousel */}
          <div className="left-btn-placeholder">
            {leftButton}
          </div>
          <div id="home-carousel-container">
            <li className="preview-carousel">
              {videoPreviews}
            </li>
          </div>
            {rightButton}
      </div>
      </>
    )
  }
}

export default withRouter(ChannelCarousel)