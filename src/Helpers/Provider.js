import React, { useState } from "react";
import VideoContext from "./Context";

// Component to provide video-related data to child components
export default function VideoProvider({ children }) {
    const [videos, setVideos] = useState([]); // State to hold video data

    // Function to update video data
    const getVideoData = (data) => {
        setVideos(data);
    }

    // Provide video-related data to child components
    return (
        <VideoContext.Provider value={{ videos, getVideoData }}>
            { children }
        </VideoContext.Provider>
    );
};