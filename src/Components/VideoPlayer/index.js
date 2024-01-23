import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import { getVideoById } from "../../helpers/fetchData";

function VideoPlayer({ vidId }) {

    const [videoInfo, setVideoInfo] = useState();

    const vidSrc = `https://www.youtube.com/embed/${vidId}`;
 

    useEffect(() => {
        const getVideoDetails = async () => {
            const data = await getVideoById(vidId);
            setVideoInfo(data);
            console.log(data)
        }
        getVideoDetails();
    }, []);
    console.log(videoInfo);

    return !videoInfo || !videoInfo.snippet ? (
        <div className="video-player">
            <p>No video found!</p>
        </div>
    ) : (
        <div className="video-player">
            <h1>{videoInfo.snippet.title}</h1>
            <iframe src={vidSrc} allowFullScreen title="video player"/>
            <p>{videoInfo.snippet.description}</p>
        </div>
    );
}

export default VideoPlayer;