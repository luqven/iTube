import React, { useState } from "react";
import VideoPreview from "../video_preview_container";

export default function Trending({ videos, getAllVideos }) {
  // const [trendingVideos, setVideos] = useState({videos});

  // if (Object.values(videos).length < 5) {
  //   getAllVideos().then(setVideos(videos));
  // }
  const videoList = [];
  if (Object.values(videos).length < 5) {
    getAllVideos().then(makeVideoList());
  } else {
    makeVideoList();
  }

  function makeVideoList() {
    let videoByViews = {};
    Object.values(videos).forEach(video => {
      videoByViews[video.views] = video;
    });
    let videoArr = Object.values(videoByViews);
    videoArr.forEach((video, i) => {
      // limit to six videos
      if (i >= videoArr.length - 6) {
        videoList.push(
          <li key={(i / 2) * Math.PI}>
            {<VideoPreview videoId={parseInt(video.id)} key={i} />}
          </li>
        );
      }
    });
    return videoList;
  }

  return (
    <div className="trending-container">
      <p className="trending-label">Trending</p>
      <ul className="trending-videos">{videoList}</ul>
    </div>
  );
}
