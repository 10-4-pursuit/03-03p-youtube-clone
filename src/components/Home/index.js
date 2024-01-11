import React from "react";
import VideoList from "../VideoList";
import SearchBar from "../SearchBar";
import dataFetching from "../../helpers/dataFetching";

export default function Home() {

    // State for storing the search term and fetched data
    const [searchTerm, setSearchTerm] = React.useState("");
    const [videos, setVideos] = React.useState([]);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await dataFetching(searchTerm);
        console.log(data);
        setVideos(data.items)
    };

    // Function to fetch data
    const fetchData = async (query) => {
        try {
            const response = await dataFetching(query);
            setVideos(response.data.items); // Update the videos state with the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    React.useEffect(() => {
        fetchData('Cooking')
    }, [])

    return (
        <div>
            <h1>YouTube</h1>
            <SearchBar handleSubmit={handleSubmit} setSearchTerm={setSearchTerm} />
            <VideoList videos={videos} />
        </div>
    )
}

