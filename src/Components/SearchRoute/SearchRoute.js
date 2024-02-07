import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { fetchData } from "../../Helpers/Data";
import VideoContext from "../../Helpers/Context";
import VideoList from "../VideoList/VideoList";

// Define the SearchRoute component
export default function SearchRoute() {
    // State for storing search query
    const [searchQuery, setSearchQuery] = useState("");
    // State for storing search query
    const { videos, getVideoData } = useContext(VideoContext);

    // Function to handle form submission for search
    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevent default form submission behavior
        // Fetch data based on search query
        const searchData = await fetchData(searchQuery);
        // Update video data in context with search results
        getVideoData(searchData.items);
      };

    // Render the SearchRoute component
    return (
        <div className="search-route-container">
            {/* Navigation links */}
            <div className='nav-bar'>
                <Link to='/' className="home-link">Home</Link>
                <Link to='/search' className="search-link">Search</Link>
            </div>

            {/* Heading for search results */}
            <h1 className="search-heading">Search</h1>
            {/* Search bar and search results */}
            <SearchBar 
                 handleSubmit={handleSubmit} 
                 setSearchQuery={setSearchQuery}
                 />

            {/* Heading for search results */}
            <h2 className="search-results-heading">Results</h2>
            {/* Render the list of search results */}
            <VideoList videos={videos}/>
        </div>
    );
}