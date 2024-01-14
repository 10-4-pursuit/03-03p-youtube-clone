import React from "react";
import ReactPlayer from "react-player";

export default function VideoPreview({ videoId }) {
    const [play, setPlay] = React.useState(false);
    const [timer, setTimer] = React.useState(null);
    const playerRef = React.useRef(null); // Create a ref for the player

    const handleMouseEnter = () => setPlay(true);
    const handleMouseLeave = () => {
        setPlay(false)
    };

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

    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ReactPlayer
                config={{ youtube: { embedOptions: { origin: "http://localhost:3002" } } }}
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