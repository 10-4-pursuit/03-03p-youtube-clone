import React from "react";
import LikeDislike from "../LikeDislike";
import { fetchVideoById } from "../../helpers/dataFetching";
import './styles.css'

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
            <iframe src={videoSrc} allowFullScreen title="Video player" className="video-container" />
            <label>
                <h3 className="video-title">{vidInfo.snippet.title}</h3>
            </label>
            <label>
                <div className="channel-title-like-dislike">
                    <h4 className="video-channel-title">{vidInfo.snippet.channelTitle}</h4>
                    <LikeDislike />
                </div>
            </label>
            <label>
                <p className="video-description">{vidInfo.snippet.description}</p>
            </label>
        </div>
    );
}