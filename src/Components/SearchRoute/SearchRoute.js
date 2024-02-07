import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { fetchData } from "../../Helpers/Data";
import VideoContext from "../../Helpers/Context";
import VideoList from "../VideoList/VideoList";


export default function SearchRoute() {
    const [searchQuery, setSearchQuery] = useState("");
    const { videos, getVideoData } = useContext(VideoContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const searchData = await fetchData(searchQuery);
        getVideoData(searchData.items);
      };

    return (
        <div className="search-route-container">
            <div className='nav-bar'>
                <Link to='/' className="home-link">Home</Link>
                <Link to='/search' className="search-link">Search</Link>
            </div>

            <h1 className="search-heading">Search</h1>
            <SearchBar 
                 handleSubmit={handleSubmit} 
                 setSearchQuery={setSearchQuery}
                 />

            <h2 className="search-results-heading">Results</h2>
            <VideoList videos={videos}/>
        </div>
    );
}