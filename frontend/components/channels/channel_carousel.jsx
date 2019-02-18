import React from 'react'
import { withRouter } from 'react-router-dom';
import VideoPreview from '../videos/video_preview_container';
import ChannelIcon from './channel_icon';

class ChannelCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewComponenets: [],
      carouselClicks: 1,
      carouselPos: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, type){
    // if first time button was clicked
    if (this.state.carouselClicks === 1) {
      let leftBtn = document.getElementById("leftArr");
      leftBtn.classList = leftBtn.classList = "home-channel-scroll-btn inactive"
    }
    let button = e.currentTarget;
    let maxPos = this.props.channel.videoIds.length - 1;
    let curPos = this.state.carouselPos;
    let clicks = this.state.carouselClicks;
    let offset = 10 * clicks;
    // set the next position
    if (type === "left") {
      offset = offset * -1;
    };
    let nextPos = Math.round((curPos + offset)) ; // if out of range, set to last ele
    if (nextPos > maxPos) {nextPos = maxPos}
    else if (nextPos < 0) {nextPos = 0};
    console.log(clicks, nextPos);
    // get the element at that position
    let carouselElement = document.getElementsByClassName("cp-" + String(nextPos))[0];
    // scroll nextPos into view
    carouselElement.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    // set background of button to grey
    button.classList = "home-channel-scroll-btn active";
    // set background transperant again
    setTimeout(() => { button.classList = "home-channel-scroll-btn inactive"}, 200);
    // increment click count, set carousel positionj\
    this.setState({
      carouselClicks: clicks,
      carouselPos: nextPos,
    });
  };

  getPreviews(){
    let componenets =  this.props.channel.videoIds.map((videoId, idx) => {
      return <VideoPreview videoId={videoId} key={idx} carouselPos={idx}/>
    })
    return componenets
  }

  componentDidMount(){
    const comps = this.getPreviews();
    this.setState({previewComponenets: comps});
  }

  render() {
    const videoPreviews = this.state.previewComponenets
    return (
      <> 
      {/* li acts as spacer for top of channel carousel */}
      <div className="channel-carousel">
          {/* <li className="channel-icon-carousel" id={String(this.props.channel.owner_id) + "_channel"}> */}
            <ChannelIcon userId={this.props.channel.owner_id} />
          {/* </li> */}
          {/* the channe's video carousel */}
          <div className="left-btn-placeholder">
            <button onClick={(e) => this.handleClick(e, "left")} className="home-channel-scroll-btn hidden" id="leftArr">
              <p className="arrow-left"><i className="arrow-icon"></i></p>
            </button>
          </div>
          <div id="home-carousel-container">
            <li className="preview-carousel">
              {videoPreviews}
            </li>
          </div>
          <button onClick={(e) => this.handleClick(e, "right")} className="home-channel-scroll-btn">
            <p className="arrow-right"><i className="arrow-icon"></i></p>
          </button>
      </div>
      </>
    )
  }
}

export default withRouter(ChannelCarousel)