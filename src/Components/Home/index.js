import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../SearchBar";
import { fetchData } from "../../helpers/fetchData";
import VideoList from "../VideoList";
import VideoContext from "../../helpers/VideoContent";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { videos, getVideoData } = useContext(VideoContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchData = await fetchData(searchQuery);
    getVideoData(searchData.items);
  };

  useEffect(() => {
    const handleData = async (query) => {
      try {
        const response = await fetchData(query);
        getVideoData(response.items);
      } catch (error) {
        console.error("Error acquring data: ", error);
      }
    };
    handleData("react tutorial coding");
  }, []);

  return (
    <div className="youtube-homepage">
      <div className="header-container">
        <SearchBar className='searchBar' handleSubmit={handleSubmit} setSearchQuery={setSearchQuery} />
        <div className="video-list-container">
          <VideoList videos={videos} />
        </div>
      </div>
    </div>
  );
}

export default Home;
