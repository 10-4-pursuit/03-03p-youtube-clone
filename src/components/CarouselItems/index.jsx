import React from "react";
import { useNavigate } from "react-router-dom";
import VideoPreview from "../VideoPreview";
import "./styles.css";

export default function CarouselItem({ video }) {

    const navigate = useNavigate();

    const videoId = video.id.videoId || video.id;

    const onVideoClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/video/${videoId}`)
    }

    return (
        <div className="carousel-video">
                <div className="video" onClick={onVideoClick}>
                    <VideoPreview videoId={videoId} />
                </div>
            <div className="carousel-video-details">
                <h4 className="carousel-video-title">{video.title}</h4>
                <p className="carousel-video-channel">{video.channelTitle}</p>
                <p className="carousel-video-description">{video.description}</p>
            </div>
        </div>
    )
};