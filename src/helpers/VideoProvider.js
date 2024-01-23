import { useState } from "react";
import VideoContext from "./VideoContext";
import { fetchTrendingVideos, fetchMusicVideos, fetchGamingVideos } from "./dataFetching";

export const VideoProvider = ({ children }) => {
    const [trendingVideos, setTrendingVideos] = useState([]);

    const [musicVideos, setMusicVideos] = useState([]);

    const [gamingVideos, setGamingVideos] = useState([]);

    const getTrendingVideos = async () => {
        const data = await fetchTrendingVideos();
        setTrendingVideos(data);
    };

    const getMusicVideos = async () => {
        const data = await fetchMusicVideos();
        setMusicVideos(data);
    }

    const getGamingVideos = async () => {
        const data = await fetchGamingVideos();
        setGamingVideos(data)
    }

    return (
        <VideoContext.Provider value={{ 
            trendingVideos, 
            getTrendingVideos, 
            musicVideos,
            getMusicVideos,
            gamingVideos,
            getGamingVideos
            }}>
            {children}
        </VideoContext.Provider>
    )
};