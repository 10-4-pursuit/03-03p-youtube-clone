import React, { useContext } from "react";
import { Link } from "react-router-dom";
import VideoContext from "../../helpers/VideoContent";


function VideoList() {
    const { videos } = useContext(VideoContext);
    // const thumbnails = videos.snippet.thumbnails.url

    return (
        <div className="video-list">
            {videos.map(video => {
                const vidId = video.id.videoId || video.id;
                return (
                    <div key={vidId}>
                        <Link to={`/video/${vidId}`}> 
                            <div>
                                {video.snippet.title}
                                <img src={`${video.snippet.thumbnails.default.url}`} alt="video thumbnail"/>
                                {video.snippet.channelId}
                                {video.snippet.description}
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default VideoList;