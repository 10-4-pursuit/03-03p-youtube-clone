import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoContext from "../../Helpers/Context";
import VideoList from "../VideoList/VideoList";
import { fetchTrendingVideos } from "../../Helpers/Data";

// Define the Home component
export default function Home() {
    // Accessing video data and function to update video data from context
    const { videos, getVideoData } = useContext(VideoContext);

    // Fetch trending videos when component mounts
    useEffect(() => {
        fetchTrendingVideos()
            .then((data) => {
                getVideoData(data);  // Update video data in context
            })
    }, []);  // Empty dependency array means this effect runs only once when component mounts

    // Render the list of trending videos
    return (
        <div className="home-container">
            {/* Navigation links */}
            <div className='nav-bar'>
                <Link to='/' className="home-link">Home</Link>
                <Link to='/search' className="search-link">Search</Link>
            </div>
            
            {/* Heading for trending videos */}
            <h1 className="trending-heading">Trending</h1>
            {/* Render the list of trending videos */}
            <VideoList videos={videos}/>
        </div>
    )
}   