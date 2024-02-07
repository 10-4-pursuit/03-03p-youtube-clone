import React from "react";
import { useParams } from "react-router-dom"
import VideoPlayer from "../VideoPlayer/VideoPlayer";

// Component to display the video player route
export default function VideoRoute() {
    const { vidId } = useParams(); // Get video ID from URL
    
    // Render the VideoPlayer component with the video ID
    return (
        <div className="video-route-container">
            <VideoPlayer vidId={ vidId } />
        </div>
    )
}