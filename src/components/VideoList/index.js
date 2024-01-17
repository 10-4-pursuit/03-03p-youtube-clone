import React from "react";
import { Link } from "react-router-dom";
import VideoPreview from "../VideoPreview";

export default function VideoList({videos}) {

    return (
       <div className="video-list">
           {videos.map(video => {
            const videoId = video.id.videoId || video.id
            return (
               <div key={videoId} className="video-item">
                <Link to={`/video/${videoId}`}>
                    <VideoPreview videoId={videoId} />
                <div>{video.snippet.title}</div>
                </Link>
                </div>
           )})}
       </div>
    );
}


