import { useState } from "react";
import VideoContext from "./VideoContext";
import { fetchTrendingVideos, fetchMusicVideos, fetchGamingVideos, dataFetching, } from "./dataFetching";

export const VideoProvider = ({ children }) => {

    const [searchResults, setSearchResults] = useState([]);

    const [trendingVideos, setTrendingVideos] = useState([]);

    const [musicVideos, setMusicVideos] = useState([]);

    const [gamingVideos, setGamingVideos] = useState([]);

    const getSearchResults = async (searchTerm) => {
        const data = await dataFetching(searchTerm);
        setSearchResults(data.items)
    }

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
            getGamingVideos,
            searchResults,
            getSearchResults
            }}>
            {children}
        </VideoContext.Provider>
    )
};