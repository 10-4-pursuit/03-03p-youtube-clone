import { createContext } from "react";

const VideoContext = createContext({ 
    trendingVideos: [],
    getTrendingVideos: () => {},
    musicVideos: [],
    getMusicVideos: () => {},
    gamingVideos: [],
    getGamingVideos: () => {},
    searchResults: [],
    getSearchResults: () => {},
});

export default VideoContext;
