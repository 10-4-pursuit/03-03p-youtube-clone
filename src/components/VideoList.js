import React from "react";
import './VideoList.css';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div className="video-item" key={video.id.videoId} onClick={() => onVideoSelect(video)}>
          <h3>{video.snippet.title}</h3>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <p>{video.snippet.description}</p>
          <p className="published-date">{video.snippet.publishedAt}</p>
          <p>{video.snippet.channelTitle}</p> 
        </div>
      ))}
    </div>
  );
};

export default VideoList;
