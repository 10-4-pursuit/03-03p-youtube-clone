import React from "react";
import { Link } from "react-router-dom";
import VideoPreview from "../VideoPreview";

export default function VideoList({videos}) {

    return (
       <div>
           {videos.map(video => (
               <div key={video.id.videoId} className="video-item">
                <Link to={`/video/${video.id.videoId}`}>
                    <VideoPreview videoId={video.id.videoId} />
                    {/* <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} /> */}
                <div>{video.snippet.title}</div>
                </Link>
                </div>
           ))}
       </div>
    );
}


