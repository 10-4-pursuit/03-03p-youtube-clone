import React from "react";
import ReactPlayer from "react-player";

export default function VideoPreview({ videoId }) {
    const [play, setPlay] = React.useState(false);
    const playerRef = React.useRef(null); // Create a ref for the player

    const handleMouseEnter = () => setPlay(true);
    const handleMouseLeave = () => {
        setPlay(false);
        if (playerRef.current) {
            playerRef.current.seekTo(0); // Reset the video to the beginning
        }
    };

    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ReactPlayer 
            ref={playerRef} // Attach the ref to the ReactPlayer
            url={videoUrl}
            playing={play}
            muted={true}
            width="40%"
            height="50%"
            />
        </div>
    );
};