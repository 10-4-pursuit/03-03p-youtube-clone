import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoContext from "../../Helpers/Context";
import VideoList from "../VideoList/VideoList";
import { fetchTrendingVideos } from "../../Helpers/Data";


export default function Home() {
    const { videos, getVideoData } = useContext(VideoContext);

    useEffect(() => {
        fetchTrendingVideos()
            .then((data) => {
                getVideoData(data);
            })
    }, []);

    return (
        <div className="home-container">
            <div className='nav-bar'>
                <Link to='/' className="home-link">Home</Link>
                <Link to='/search' className="search-link">Search</Link>
            </div>
            
            <h1 className="trending-heading">Trending</h1>
            <VideoList videos={videos}/>
        </div>
    )
}   