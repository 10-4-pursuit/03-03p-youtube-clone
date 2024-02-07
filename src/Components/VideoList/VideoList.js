import React from "react";
import { Link } from "react-router-dom";

export default function VideoList({ videos }) {

    return (
        <div className="video-list-container">
            {videos.map(video => {
                const vidId = video.id.videoId || video.id;

                return (
                    <div className="video-item" key={vidId}>
                        <Link to={`/video/${vidId}` } className="video-link"> 
                            <div className="video-info">
                                <label className="video-title">
                                    {video.snippet.title}
                                </label>

                                <br/>
                                <label className="video-channel">
                                    {video.snippet.channelTitle}
                                </label>

                                <br/>
                                <div className="video-thumbnail">
                                    <img
                                     src={`${video.snippet.thumbnails.default.url}`} 
                                     alt="video thumbnail"/>
                                </div> 
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}