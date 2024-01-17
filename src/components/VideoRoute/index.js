// Import Dependencies and Components
import React from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../VideoPlayer";

export default function VideoRoute() {
    // Retrieve URL Parameter
    const { videoId } = useParams();

    // Render the Component
    return (
        <div>
            {/* Display the VideoPlayer Component */}
            <VideoPlayer videoId={videoId} />
        </div>
    );
};