import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import VideoContext from "../../Helpers/Context";
import VideoList from "../VideoList/VideoList";
import { fetchTrendingVideos } from "../../Helpers/Data";
import { Navbar, Nav } from 'react-bootstrap';

// Define the Home component
export default function Home() {
    // Accessing video data and function to update video data from context
    const { videos, getVideoData } = useContext(VideoContext);

    // Fetch trending videos when component mounts
    useEffect(() => {
        fetchTrendingVideos()
            .then((data) => {
                console.log(data)
                getVideoData(data);  // Update video data in context
            })
    }, []);  // Empty dependency array means this effect runs only once when component mounts

    // Render the list of trending videos
    return (
        <div className="home-container">
            {/* Navigation links */}
            {/* Bootstrap Navbar */}
            <Navbar bg="dark" expand="xxl" variant="dark" sticky="top">
                <Navbar.Brand className="logo" as={Link} to="/">YouTube Clone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            {/* Heading for trending videos */}
            <h1 className="trending-heading">Trending</h1>
            {/* Render the list of trending videos */}
            <VideoList videos={videos}/>
        </div>
    )
}   