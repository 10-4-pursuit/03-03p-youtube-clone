import React, { useEffect, useState } from "react";
import { getVideoById } from "../../helpers/fetchData";
import './VideoPlayer.css'

function VideoPlayer({ vidId }) {

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
            <p>No video found!</p>
        </div>
    ) : (
        <div className="video-player">
            <h1 className="video-title">{videoInfo.snippet.title}</h1>
            <iframe src={vidSrc} allowFullScreen title="video player"/>
            <div className="video-description-container">
                <p className="video-description">{videoInfo.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoPlayer;