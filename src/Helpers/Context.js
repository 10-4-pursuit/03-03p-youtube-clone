import { createContext } from "react";

// Create a context for managing video-related data
const VideoContext = createContext({
    videos: [], // Array to hold video data
    getVideoData: ()=> {} // Function to update video data
})

export default VideoContext;