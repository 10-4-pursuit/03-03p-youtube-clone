import { createContext } from "react";

const VideoContext = createContext({
    videos: [],
    getVideoData: ()=> {}
})

export default VideoContext;