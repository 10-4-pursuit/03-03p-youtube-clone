import { Link } from "react-router-dom";
import VideoPreview from "../VideoPreview";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles.css'

export default function VideoList({ videos }) {

    return (
        <div className="video-list">
            <Carousel centerMode={true} width={'62.5%'}>
            {videos.map(video => {
                const videoId = video.id.videoId || video.id
                return (
                    <div key={videoId} className="video-item">
                        <Link to={`/video/${videoId}`}>
                            <VideoPreview videoId={videoId} />
                            <div className="home-page-video-title">{video.snippet.title}</div>
                            <div className="home-page-video-channel-title">{video.snippet.channelTitle}</div>
                        </Link>
                    </div>
                );
            })}
            </Carousel>
        </div>
    );
}


