import React from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../VideoPlayer";

export default function VideoRoute() {
    const { videoId } = useParams();

    return (
        <div>
            <VideoPlayer videoId={videoId} />
        </div>
    );
};