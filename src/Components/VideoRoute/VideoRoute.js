import React from "react";
import { useParams } from "react-router-dom"
import VideoPlayer from "../VideoPlayer";

export default VideoRoute = () =>{
    const {vidId} = useParams(); 
    
    return (
        <div>
            <VideoPlayer vidId={vidId} />
        </div>
    )
}