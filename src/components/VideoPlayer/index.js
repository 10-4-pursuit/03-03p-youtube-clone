import React from "react";
import LikeDislike from "../LikeDislike";
import { fetchVideoById } from "../../helpers/dataFetching";

export default function VideoPlayer({ videoId }) {

    const [vidInfo, setVidInfo] = React.useState();

    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    React.useEffect(() => {
        const getVidInfo = async () => {
            const data = await fetchVideoById(videoId);
            setVidInfo(data);
        }
        getVidInfo();
    }, [])

    if (!vidInfo || !vidInfo.snippet) {
        return <div>Video Not Found!</div>
    }

    return (
        <div className="video-player">
            <iframe src={videoSrc} allowFullScreen title="Video player" />
            <LikeDislike />
            <label>
                <h3>{vidInfo.snippet.title}</h3>
            </label>
            <label>
                <h4>{vidInfo.snippet.channelTitle}</h4>
            </label>
            <label>
                <p>{vidInfo.snippet.description}</p>
            </label>
        </div>
    );
}