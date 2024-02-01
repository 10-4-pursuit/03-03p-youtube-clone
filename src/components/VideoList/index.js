import { Link } from "react-router-dom";
import VideoPreview from "../VideoPreview";
import Carousel from "../Carousel";
import './styles.css'

export default function VideoList({ videos }) {

    const carouselItems = videos.map(video => {
        return {
            title: video.snippet.title,
            description: video.snippet.description,
            videoId: video.id.videoId || video.id,
            channelTitle: video.snippet.channelTitle
        };
    });

    return (
        <div className="video-list">
            <Carousel videos={carouselItems} />
        </div>
    );
}


