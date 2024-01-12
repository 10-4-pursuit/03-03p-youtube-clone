import React from "react";
import { Link } from "react-router-dom";

export default function VideoList({videos}) {

    return (
       <div>
           {videos.map(video => (
               <div key={video.id.videoId}>
                <Link to={`/video/${video.id.videoId}`}>
                {video.snippet.title}
                </Link>
                </div>
           ))}
       </div>
    );
}


