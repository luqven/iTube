export const handleKeyPress = (e) => {
    let videoEle = document.getElementsByTagName('video')[0]
    let spacebar = 32
    let escape   = 27
    let fKey     = 70
    let kKey     = 75
    let mKey     = 77

    let playBtn = document.querySelector('.video-play')
    let pauseBtn = document.querySelector('.video-pause')

    if (e.keyCode === spacebar) {
      // ternary that determines whether to pause or unpause video
      videoEle.paused ? videoEle.play() : videoEle.pause();
      playBtn.classList.toggle('hidden')
      pauseBtn.classList.toggle('hidden')
    } else if (e.keyCode === escape) {
      videoEle.exitFullscreen();
    } else if (e.keyCode === fKey) {
      videoEle.requestFullscreen();
    } else if (e.keyCode === kKey) {
      clickPlay(videoEle);
    } else if (e.keyCode === mKey) {
      clickMute(videoEle);
    } 
  }


const clickPlay = (videoEle) => {
  let playBtn = document.querySelector('.video-play')
  let pauseBtn = document.querySelector('.video-pause')
  // toggle videoEle play bool
  if (videoEle.paused || videoEle.ended) {
    videoEle.play();
    playBtn.classList.add("hidden")
    pauseBtn.classList.remove("hidden")
  } else {
    videoEle.pause();
    pauseBtn.classList.add("hidden")
    playBtn.classList.remove("hidden")
  }
  // toggle play & pause buttons hidden class
}

const clickSkip = (videoEle) => {
  // set videoEle playhead to 25% ahead of current location
  videoEle.currentTime += 10
}

const clickMute = (videoEle) => {
  let muteBtn = document.querySelector('.video-mute')
  let unMuteBtn = document.querySelector('.video-unmute')
  e.preventDefault()
  // toggle volume between 0 and previous volume value
  if (videoEle.muted) {
    videoEle.muted = false
    muteBtn.classList.add("hidden")
    unMuteBtn.classList.remove("hidden")
  }
  else {
    videoEle.muted = true;
    muteBtn.classList.remove("hidden")
    unMuteBtn.classList.add("hidden")
  }
}

const clickFullscreen = (videoEle) => {
  // set videoEle fullscreen to true
  videoEle.requestFullscreen();
}