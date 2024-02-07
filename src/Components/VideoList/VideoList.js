import React from "react";
import { Link } from "react-router-dom";

// Component to display a list of videos
export default function VideoList({ videos }) {

    return (
        <div className="video-list-container">
            {/* Map over each video in the list */}
            {videos.map(video => {
                const vidId = video.id.videoId || video.id;

                return (
                    <div className="video-item" key={vidId}>
                        {/* Link to the video player page */}
                        <Link to={`/video/${vidId}` } className="video-link"> 
                            <div className="video-info">
                                {/* Display video title */}
                                <label className="video-title">
                                    {video.snippet.title}
                                </label>

                                <br/>
                                {/* Display video channel */}
                                <label className="video-channel">
                                    {video.snippet.channelTitle}
                                </label>

                                <br/>
                                {/* Display video thumbnail */}
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