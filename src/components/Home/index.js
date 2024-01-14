import React from "react";
import axios from "axios";
import VideoList from "../VideoList";
import SearchBar from "../SearchBar";
import dataFetching from "../../helpers/dataFetching";

export default function Home() {

    // State for storing the search term and fetched data
    const [searchTerm, setSearchTerm] = React.useState("");
    const [videos, setVideos] = React.useState([]);
    const [trendingVideos, setTrendingVideos] = React.useState([]);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await dataFetching(searchTerm);
        setVideos(data.items)
    };

    const fetchTrendingVideos = async () => {
        try {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                params: {
                    part: 'snippet,contentDetails,statistics',
                    chart: 'mostPopular',
                    regionCode: 'US',
                    maxResults: 10,
                    key: process.env.REACT_APP_API_KEY,
                }
            });
            console.log(response.data);
            setTrendingVideos(response.data.items);
        } catch (error) {
            console.error('Error fetching trending videos:', error);
        }
    };

    React.useEffect(() => {
        fetchTrendingVideos();
    }, []);

    return (
        <div>
            <h1>YouTube</h1>
            <SearchBar handleSubmit={handleSubmit} setSearchTerm={setSearchTerm} />

            <h2>Trending Videos</h2>
            <VideoList videos={trendingVideos} />

            <h2>Top Videos</h2>

            <h2>Music Videos</h2>

            <h2>Most Viewed Videos</h2>

            {videos.length > 0 && (
                <>
                <h2>Search Results</h2>
                <VideoList videos={videos} />
                </>
            )}
        </div>
    )
}

