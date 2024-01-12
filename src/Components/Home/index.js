import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import fetchData from "../../helpers/fetchData";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [videos, setVideos] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const searchData = await fetchData(searchQuery);
        console.log(searchData);
    }



    return (
        <div>
            <h1>Welcome to VibeStream!</h1>
            <SearchBar handleSubmit={handleSubmit} setSearchQuery={setSearchQuery} />
            
        </div>
    )
}

export default Home;