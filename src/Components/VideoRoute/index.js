import React from "react";
import { useParams } from "react-router-dom"
import VideoPlayer from "../VideoPlayer";


function VideoRoute() {
    const {vidId} = useParams(); 
    
    return (
        <div>
            <VideoPlayer vidId={vidId} />
        </div>
    )
}

export default VideoRoute;