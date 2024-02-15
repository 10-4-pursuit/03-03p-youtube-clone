import React from "react";
import { Link } from "react-router-dom";
import VideoPreview from "../VideoPreview";
import Carousel from "../Carousel";
import './styles.css'

export default function VideoList({ videos, displayMode = 'carousel' }) {

    const renderVideosForPage = () => {
        return videos.map(video => {
            
            const videoId = video.id.videoId || video.id;
            return (
                <div key={videoId} className="video-item">
                    <Link to={`/video/${videoId}`} className="video-link">
                        <VideoPreview videoId={videoId} />
                    </Link>
                    <div className="video-details">
                        <div className="video-title">{video.snippet.title}</div>
                        <div className="video-channel-title">{video.snippet.channelTitle}</div>
                    </div>
                </div>
            );
        });
    };
    console.log(videos)
    return (
        <div className={displayMode === 'carousel' ? 'video-carousel' : 'video-list-page'}>
            {displayMode === 'carousel' ? (
                <Carousel videos={videos} />
            ) : (
                renderVideosForPage()
            )}
        </div>
    );
};


