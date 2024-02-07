import React from "react";
import { useParams } from "react-router-dom"
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export default function VideoRoute() {
    const { vidId } = useParams(); 
    
    return (
        <div className="video-route-container">
            <VideoPlayer vidId={ vidId } />
        </div>
    )
}