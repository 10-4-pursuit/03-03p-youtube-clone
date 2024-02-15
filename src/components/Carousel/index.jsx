import React from "react";
import CarouselItem from "../CarouselItems";
import "./styles.css";

export default function Carousel({ videos }) {

    const [activeIndex, setActiveIndex] = React.useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = videos.length - 1;
        } else if (newIndex >= videos.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    return (
        <div className="carousel">
            <div className="inner-carousel"
                style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                {videos.map((video, index) => {
                    return <CarouselItem video={video} key={index}/>
                })}
            </div>
            <div className="carousel-buttons">
                <button onClick={() => {
                    updateIndex(activeIndex - 1)
                }} 
                className="carousel-button-arrow">
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                </button>
                <div className="carousel-indicators">
                    {videos.map((video, index) => {
                        return (
                            <button onClick={() => {
                                updateIndex(index)
                            }}
                            className="carousel-indicator-buttons"
                            key={video.title || index}>
                        <span className={`material-symbols-outlined ${index === activeIndex ? "carousel-indicator-symbol-active" : "carousel-indicator-symbol"}`}>
                            radio_button_checked
                        </span>
                    </button>
                        );
                    })}
                </div>
                <button onClick={() => {
                    updateIndex(activeIndex + 1)
                }} 
                className="carousel-button-arrow">
                    <span className="material-symbols-outlined">
                        arrow_forward_ios
                    </span>
                </button>
            </div>
        </div>
    );
};