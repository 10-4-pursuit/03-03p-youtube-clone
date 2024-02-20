import React, { useContext } from "react";
import { Link } from "react-router-dom";
import VideoContext from "../../helpers/VideoContent";
import "./VideoList.css";

function VideoList() {
    const { videos } = useContext(VideoContext);
    
    return (
        <div className="video-list-container">
            {videos.map(video => {
                const vidId = video.id.videoId || video.id;
                return (
                    <div className="video-item" key={vidId}>
                        <Link to={`/video/${vidId}` } className="video-link"> 
                            <div>
                                <label className="video-title">
                                    {video.snippet.title}
                                </label>
                                    <br/>
                                <div className="video-thumbnail">
                                    <img
                                     src={`${video.snippet.thumbnails.default.url}`} 
                                     alt="video thumbnail"/>
                                </div>
                                <label className="description">
                                    {video.snippet.description}
                                </label> 
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default VideoList;