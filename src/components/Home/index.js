// Import Dependencies and Components
import React from "react";
import axios from "axios";
import VideoList from "../VideoList";
import SearchBar from "../SearchBar";
import { fetchTrendingVideos } from "../../helpers/dataFetching";

export default function Home() {

    // State for storing the list of currently trending videos
    const [trendingVideos, setTrendingVideos] = React.useState([]);

    // Calls fetchTrendingVideos when the component is first mounted.
    React.useEffect(() => {
        const loadInitialVideos = async () => {
            const data = await fetchTrendingVideos();
            setTrendingVideos(data);
        }
        loadInitialVideos();
    }, []);

    return (
        <div>
            <h1>YouTube</h1>
            <SearchBar />

            <h2>Trending Videos</h2>
            <VideoList videos={trendingVideos} />

            <h2>Music Videos</h2>

            <h2>Most Viewed Videos</h2>

        </div>
    )
}

