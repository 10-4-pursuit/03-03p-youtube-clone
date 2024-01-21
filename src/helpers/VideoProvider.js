import { useState } from "react";
import VideoContext from "./VideoContext";

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([])
    const getVideoData = (videos) => {
        setVideos(videos);
    };

    return (
        <VideoContext.Provider value={{ videos, getVideoData }}>
            {children}
        </VideoContext.Provider>
    )
};