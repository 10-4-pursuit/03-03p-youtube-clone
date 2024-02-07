import React, { useState } from "react";
import VideoContext from "./Context";

export default function VideoProvider({ children }) {
    const [videos, setVideos] = useState([]);

    const getVideoData = (data) => {
        setVideos(data);
    }

    return (
        <VideoContext.Provider value={{ videos, getVideoData }}>
            { children }
        </VideoContext.Provider>
    );
};