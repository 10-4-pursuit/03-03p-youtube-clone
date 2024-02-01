import React from "react";
import { Link } from "react-router-dom";
import VideoPreview from "../VideoPreview";
import "./styles.css";

export default function CarouselItem({ video }) {

    return (
        <div className="carousel-video">
            <Link to={`/video/${video.videoId}`}>
                <VideoPreview videoId={video.videoId} />
            </Link>
            <div className="carousel-video-details">
                    <h4 className="carousel-video-title">{video.title}</h4>
                    <p className="carousel-video-channel">{video.channelTitle}</p>
                    <p className="carousel-video-description">{video.description}</p>
                </div>
        </div>
    )
};