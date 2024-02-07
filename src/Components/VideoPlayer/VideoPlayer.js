import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getVideoById } from "../../Helpers/Data";

export default function VideoPlayer({ vidId }) {
    const [videoInfo, setVideoInfo] = useState();
    const vidSrc = `https://www.youtube.com/embed/${vidId}`;
 
    useEffect(() => {
        const getVideoDetails = async () => {
            const data = await getVideoById(vidId);
            setVideoInfo(data);
        }
        getVideoDetails();
    }, []);

    return !videoInfo || !videoInfo.snippet ? (
        <div className="video-player">
            <p className="no-video-found">No video found!</p>
        </div>
    ) : (
        <div className="video-player">
            <div className='nav-bar'>
                <Link to='/' className="home-link">Home</Link>
                <Link to='/search' className="search-link">Search</Link>
            </div>

            <div className="video-info">
                <h1 className="video-title">{videoInfo.snippet.title}</h1>
                <h2 className="video-channel">{videoInfo.snippet.channelTitle}</h2>
            </div>
            
            <iframe src={vidSrc} allowFullScreen title="video player"/>

            <div className="video-description-container">
                <p className="video-description">{videoInfo.snippet.description}</p>
            </div>
        </div>
    );
}