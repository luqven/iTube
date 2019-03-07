import React from 'react'

export default class VideoControls extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      prog: 0,
      duration: 0, 
      volume: 0
    };

    this.clickMute = this.clickMute.bind(this);
    this.clickPlay = this.clickPlay.bind(this);
    this.clickSkip = this.clickSkip.bind(this);
    this.handleControl = this.handleControl.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clickFullscreen = this.clickFullscreen.bind(this);
  }

  componentDidMount(){
    document.addEventListener('keydown',this.handleKeyPress)
    this.videoEle = document.getElementsByTagName('video')[0]
    this.videoEle.controls = false;
    this.videoEle.addEventListener('timeupdate', this.updateProgress)

    this.setState({
      duration: this.videoEle.duration,
      volume: this.videoEle.volume,
    })
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyPress);
    this.videoEle.removeEventListener('timeupdate', this.updateProgress)
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

  updateProgress(){
    let playHead = Math.floor((100 / this.videoEle.duration) * this.videoEle.currentTime)
    let progressBar = document.querySelector(".progress")
    progressBar.style.width = playHead + '%'
    this.setState({prog: playHead})
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
    this.videoEle.currentTime = this.state.prog + (.25 * this.state.prog)
  }

  clickMute(e){
    e.preventDefault()
    // toggle volume between 0 and previous volume value
    if (this.videoEle.volume = 0){
      this.videoEle.volume = this.state.volume
    } else {
      this.setState({volume: this.videoEle.volume})
      this.videoEle.volume = 0
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
        <div className="video-src-container">
          <video width="320" height="240" preload="metadata" controls="controls"
            src={`${this.props.source}`} type="video/mp4">
          </video>
        </div>
        <div className="progress-background">
          <div className="progress"></div>
        </div>
        <div className="video-controls-container">
          <div className="controls-btns">
            <button 
              onClick={ e => this.handleControl(e, 'pause')} 
              className="video-pause hidden"> || 
            </button>
            <button 
              onClick={ e => this.handleControl(e, 'play')} 
              className="video-play"> > 
            </button>
            <button 
              onClick={ e => this.handleControl(e, 'skip')} 
              className="video-skip"> > | 
            </button>
            <button 
              onClick={ e => this.handleControl(e, 'fullscreen')} 
              className="video-full"> [ ] 
            </button>
          </div>
        </div>
      </>
    )
  }
}