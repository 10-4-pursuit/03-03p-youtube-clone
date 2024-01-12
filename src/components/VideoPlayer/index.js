import React from "react";

export default function VideoPlayer({ videoId }) {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <iframe src={videoSrc} allowFullScreen title="Video player" />
        </div> 
    );
}