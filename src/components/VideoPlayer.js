import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) return <div className="loading-message">Loading...</div>;
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-player-container">
      <iframe
        src={videoSrc}
        allowFullScreen
        title="Video Player"
       
      />
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
      <p className="published-date">{video.snippet.publishedAt}</p>
      <p className="channel-title">{video.snippet.channelTitle}</p>
    </div>
  );
};

export default VideoPlayer;