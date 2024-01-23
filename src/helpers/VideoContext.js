import { createContext } from "react";

const VideoContext = createContext({ 
    trendingVideos: [],
    getTrendingVideos: () => {},
    musicVideos: [],
    getMusicVideos: () => {},
    gamingVideos: [],
    getGamingVideos: () => {},
});

export default VideoContext;
