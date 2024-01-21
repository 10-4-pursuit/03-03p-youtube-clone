import React from "react";
import LikeDislike from "../LikeDislike";
import VideoContext from "../../helpers/VideoContext";

export default function VideoPlayer({ videoId }) {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    const {videos} = React.useContext(VideoContext)
    
    const video = videos.find((vid) => {
        const id = vid.id.videoId || vid.id
        return videoId === id
    });

    if (!video || !video.snippet) {
        return <div>Video Not Found!</div>
    }

    return (
        <div>
            <iframe src={videoSrc} allowFullScreen title="Video player" />
            <LikeDislike />
            <label>
                <p>{video.snippet.title}</p>
            </label>
            <label>
                <p>{video.snippet.channelTitle}</p>
            </label>
            <label>
                <p>{video.snippet.description}</p>
            </label>
        </div> 
    );
}