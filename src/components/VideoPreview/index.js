// Import Dependencies
import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';
import './styles.css'

export default function VideoPreview({ videoId }) {
    // Initialize State and Refs
    const [play, setPlay] = React.useState(false);
    const [timer, setTimer] = React.useState(null);
    const playerRef = React.useRef(null); // Create a ref for the player
    const navigate = useNavigate();

    // Define Mouse Event Handlers
    const handleMouseEnter = () => setPlay(true);
    const handleMouseLeave = () => {
        setPlay(false)
    };

    const handleVideoClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        navigate(`/video/${videoId}`);
    };

    // Using React.useEffect for Video Control Logic
    React.useEffect(() => {
        if (play) {
            const currentTimer = setTimeout(() => {
                setPlay(false);
                if (playerRef.current) {
                    playerRef.current.seekTo(0); // Reset the video to the beginning
                };
            }, 10000);
            setTimer(currentTimer);
        } else {
            clearTimeout(timer);
            if (playerRef.current) {
                playerRef.current.seekTo(0); // Reset the video to the beginning
            };
        }
    }, [play]);

    // Define Video URL
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="video-preview-container">
            <div onClick={handleVideoClick} className="video-click-handle">
                {/* When you make the CSS styling for this include the width and height functionality as well as the positioning*/}
            </div>
            <ReactPlayer
                config={{ youtube: { embedOptions: { origin: "http://localhost:3002" } } }}
                ref={playerRef} // Attach the ref to the ReactPlayer
                url={videoUrl} // Set the url to the videoUrl
                playing={play} // Control playback with the playing prop set to the state play
                muted={true} // Mute the video
                width="40%" // Set its width
                height="50%" // Set its height
            />
        </div>
    );
};