// Import Dependencies and Components
import React from "react";
import VideoList from "../VideoList";
import SearchBar from "../SearchBar";
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
        <div>
            <h1>YouTube</h1>
            <SearchBar />

            <h2>Trending Videos</h2>
            {trendingVideos.length > 0 && <VideoList videos={trendingVideos} />}

            <h2>Music Videos</h2>
            {musicVideos.length > 0 && <VideoList videos={musicVideos} />}

            <h2>Gaming Videos</h2>
            {gamingVideos.length > 0 && <VideoList videos={gamingVideos} />}

        </div>
    )
}

