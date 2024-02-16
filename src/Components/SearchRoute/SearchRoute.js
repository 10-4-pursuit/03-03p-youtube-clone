import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { fetchData } from "../../Helpers/Data";
import VideoContext from "../../Helpers/Context";
import VideoList from "../VideoList/VideoList";
import { Navbar, Nav } from 'react-bootstrap';

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
        console.log(searchData.items)
      };

    // Render the SearchRoute component
    return (
        <React.Fragment>
        <div className="home-container">
            {/* Navigation links */}
            {/* Bootstrap Navbar */}
            <Navbar bg="dark" expand="xxl" variant="dark" sticky="top">
                <Navbar.Brand className=
                "logo" as={Link} to="/">YouTube Clone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

        <div className="search-container">
            {/* Heading for search results */}
            <h1 className="search-heading">Search</h1>
            {/* Search bar and search results */}
            <SearchBar className="search-bar"
                 handleSubmit={handleSubmit} 
                 setSearchQuery={setSearchQuery}
                 />
            <br/>
            <br/>
            {/* Heading for search results */}
            <h2 className="search-results-heading">Results</h2>
            {/* Render the list of search results */}
            <VideoList videos={videos}/>
        </div>
        </React.Fragment>
    );
}