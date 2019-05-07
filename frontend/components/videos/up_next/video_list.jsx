import React from "react";
import VideoPreview from "../video_preview_container";

export default function VideoList({ videoId, channelVideos }) {
  const getList = (channelVideos, videoId) => {
    let videoList = [];
    Object.values(channelVideos).forEach((video, idx) => {
      if (video.id !== videoId) {
        videoList.push(
          <li id={idx}>
            <VideoPreview videoId={video.id} />
          </li>
        );
      }
    });
    return videoList;
  };

  let videos;
  if (channelVideos) {
    videos = getList(channelVideos, videoId);
  }

  return (
    <>
      <p className="up-next-header">Up next</p>
      <ul className="up-next-ul">{videos}</ul>
    </>
  );
}
