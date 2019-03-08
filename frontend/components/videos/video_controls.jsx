import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class VideoControls extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      progPercent: 0,
      duration: 0, 
      volume: 1
    };

    this.clickMute = this.clickMute.bind(this);
    this.clickPlay = this.clickPlay.bind(this);
    this.clickSkip = this.clickSkip.bind(this);
    this.handleControl = this.handleControl.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clickFullscreen = this.clickFullscreen.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.updateCurrentTime = this.updateCurrentTime.bind(this);
  }

  componentDidMount(){
    document.addEventListener('keydown',this.handleKeyPress)
    this.videoEle = document.getElementsByTagName('video')[0]
    this.videoEle.controls = false;
    this.videoEle.addEventListener('timeupdate', this.updateProgress)
    this.controls = document.querySelector(".video-controls-container")
    setTimeout(() => this.controls.classList.add("transparent"), 700)

    this.setState({
      duration: this.videoEle.duration,
      volume: this.videoEle.volume,
      progPercent: 0,
    })
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress);
    this.videoEle.removeEventListener('timeupdate', this.updateProgress)
    this.setState({
      duration: this.videoEle.duration,
      volume: this.videoEle.volume,
      progPercent: 0,
    })
  }

  handleKeyPress(e) {
    let spacebar = 32
    let escape   = 27
    let playBtn = document.querySelector('.video-play')
    let pauseBtn = document.querySelector('.video-pause')

    if (e.keyCode === spacebar) {
      // ternary that determines whether to pause or unpause video
      this.videoEle.paused ? this.videoEle.play() : this.videoEle.pause();
      playBtn.classList.toggle('hidden')
      pauseBtn.classList.toggle('hidden')
    } else if (e.keyCode === escape) {
      this.videoEle.exitFullscreen();
    }
  }

  handleMouseEnter(){
    this.controls.classList.remove("transparent")
  }

  handleMouseLeave(){
    this.controls.classList.add("transparent")
  }

  // helper that changes red progress bar by
  // setting state progressPercent
  updateProgress(){
    let playHead = (100 / this.videoEle.duration) * this.videoEle.currentTime
    let progressBar = document.querySelector(".progress")
    progressBar.style.width = playHead + '%'
    this.setState({ progPercent: playHead})
  }

  // helper that sets video playHead to target.value
  updateCurrentTime(e){
    e.preventDefault();
    // playHead / (100 / this.videoEle.duration) = this.videoEle.currentTime
    let targetTime = Number(e.target.value) / (100 / this.videoEle.duration)
    this.videoEle.currentTime = targetTime    
    this.updateProgress();
  }

  // --------
  // HandleControl helper fns
  // --------

  clickPlay(e){
    e.preventDefault()
    let playBtn  = document.querySelector('.video-play')
    let pauseBtn = document.querySelector('.video-pause')
    // toggle videoEle play bool
    if (this.videoEle.paused || this.videoEle.ended) {
      this.videoEle.play();
      playBtn.classList.add("hidden")
      pauseBtn.classList.remove("hidden")
    } else {
      this.videoEle.pause();
      pauseBtn.classList.add("hidden")
      playBtn.classList.remove("hidden")
    }
    // toggle play & pause buttons hidden class
  }

  clickSkip(e){
    e.preventDefault()
    // set videoEle playhead to 25% ahead of current location
    this.videoEle.currentTime += 10
  }

  clickMute(e){
    let muteBtn = document.querySelector('.video-mute')
    let unMuteBtn = document.querySelector('.video-unmute')
    e.preventDefault()
    // toggle volume between 0 and previous volume value
    if (this.videoEle.muted) {
      this.videoEle.muted = false
      muteBtn.classList.add("hidden")
      unMuteBtn.classList.remove("hidden")
    }
    else {
      this.videoEle.muted = true;
      muteBtn.classList.remove("hidden")
      unMuteBtn.classList.add("hidden")
    }
  }

  clickFullscreen(e){
    e.preventDefault()
    // set videoEle fullscreen to true
    this.videoEle.requestFullscreen();
  }

  // --------
  // HandleControl receives dom event and control type
  // then executes a helper fn of given type
  // --------

  handleControl(e, type){
    
    switch(type){
      case 'play':
        return this.clickPlay(e);
      case 'pause':
        return this.clickPlay(e);
      case 'skip':
        return this.clickSkip(e);
      case 'mute':
        return this.clickMute(e);
      case 'fullscreen':
        return this.clickFullscreen(e);
      default:
      return
    }
  }

  render(){
    return (
      <>
        <div 
        onMouseLeave={this.handleMouseLeave} 
        onMouseEnter={this.handleMouseEnter} 
        onClick={e => this.clickPlay(e)} 
        className="video-src-container">
          <video width="320" height="240" preload="metadata" controls="controls" autoPlay={true}
            poster={this.props.thumbnail} src={`${this.props.source}`} type="video/mp4">
          </video>
        </div>
        <div 
          onMouseEnter={this.handleMouseEnter} 
          onMouseLeave={this.handleMouseLeave} 
          className="video-controls-container">
          <div className="controls-btns">
            <button 
              onClick={ e => this.handleControl(e, 'pause')} 
              className="video-pause hidden">
              <FontAwesomeIcon onClick={e => this.handleControl(e, 'pause')} icon="pause" /> 
            </button>
            <button 
              onClick={ e => this.handleControl(e, 'play')} 
              className="video-play"> 
              <FontAwesomeIcon onClick={e => this.handleControl(e, 'play')} icon="play" /> 
            </button>
            <button 
              onClick={ e => this.handleControl(e, 'skip')} 
              className="video-skip">
              <FontAwesomeIcon onClick={e => this.handleControl(e, 'skip')} icon="step-forward" /> 
            </button>
            <button 
              onClick={ e => this.handleControl(e, 'fullscreen')} 
              className="video-full">
              <FontAwesomeIcon onClick={e => this.handleControl(e, 'fullscreen')} icon="expand" />
            </button>
            <button 
              onClick={ e => this.handleControl(e, 'mute')} 
              className="hidden video-mute">
              <FontAwesomeIcon onClick={e => this.handleControl(e, 'mute')} icon="volume-mute"/>
            </button>
            <button 
              onClick={ e => this.handleControl(e, 'mute')} 
              className="video-unmute">
              <FontAwesomeIcon onClick={e => this.handleControl(e, 'mute')} icon="volume-up"/>
            </button>
          </div>
          <div className="progress-background">
            <input
              onChange={e => this.updateCurrentTime(e)}
              type="range"
              min="0"
              max="100"
              value={`${this.state.progPercent + 0}`}
              className="progress-timeline" id="myRange">
            </input>
            <div className="progress"></div>
          </div>
        </div>
      </>
    )
  }
}