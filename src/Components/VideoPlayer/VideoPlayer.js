import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVideoById } from "../../Helpers/Data";
import { Navbar, Nav } from 'react-bootstrap';

// Component to display a video player
export default function VideoPlayer({ vidId }) {
    const [videoInfo, setVideoInfo] = useState();
    const vidSrc = `https://www.youtube.com/embed/${vidId}`;
 
    // Fetch video details when component mounts
    useEffect(() => {
        const getVideoDetails = async () => {
            const data = await getVideoById(vidId);
            setVideoInfo(data);
        }
        getVideoDetails();
    }, []);

    // Render video player
    return !videoInfo || !videoInfo.snippet ? (
        <div className="video-player">
            <p className="no-video-found">No video found!</p>
        </div>
    ) : (
        <div className="video-player">
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

            {/* Display video details */}
            <div className="video-info">
                <h1 className="video-title">{videoInfo.snippet.title}</h1>
                <h2 className="video-channel">{videoInfo.snippet.channelTitle}</h2>
            </div>
            
            {/* Display video player */}
            <iframe src={vidSrc} className="video" allowFullScreen title="video player" height={"750px"} width={"90%"}/>

            {/* Display video description */}
            <div className="video-description-container">
                <p className="video-description">{videoInfo.snippet.description}</p>
            </div>
        </div>
    );
}