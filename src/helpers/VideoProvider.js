import React, { useState } from "react";
import VideoContext from "./VideoContent";

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    const getVideoData = (data) => {
        setVideos(data);
    }

    return(
        <VideoContext.Provider value={{ videos, getVideoData }}>
            {children}
        </VideoContext.Provider>
    );
};