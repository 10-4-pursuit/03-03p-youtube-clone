import React from "react";
import LikeDislike from "../LikeDislike";

export default function VideoPlayer({ videoId }) {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <iframe src={videoSrc} allowFullScreen title="Video player" />
            <LikeDislike />
        </div> 
    );
}