// Import Dependencies and Components
import React from "react";
import VideoList from "../VideoList";
import VideoContext from "../../helpers/VideoContext";

export default function Home() {

    const {
        trendingVideos,
        getTrendingVideos,
        musicVideos,
        getMusicVideos,
        gamingVideos,
        getGamingVideos
    } = React.useContext(VideoContext)

    React.useEffect(() => {
        getTrendingVideos();
    }, []);

    React.useEffect(() => {
        getMusicVideos();
    }, []);

    React.useEffect(() => {
        getGamingVideos();
    }, []);

    return (
        <div className="home-page">
            <h1 className="page-header">Welcome!</h1>

            <h2 className="trending-videos">Trending Videos</h2>
            {trendingVideos.length > 0 && <VideoList videos={trendingVideos} />}

            <h2 className="music-videos">Music Videos</h2>
            {musicVideos.length > 0 && <VideoList videos={musicVideos} />}

            <h2 className="gaming-videos">Gaming Videos</h2>
            {gamingVideos.length > 0 && <VideoList videos={gamingVideos} />}
        </div>
    )
}

