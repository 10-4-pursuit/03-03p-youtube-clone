import React from "react";

export default function VideoList({videos}) {

    return (
       <div>
           {videos.map(video => (
               <div key={video.id.videoId}>{video.snippet.title}</div>
           ))}
       </div>
    );
}


