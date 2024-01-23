import React, { useState, useEffect, useContext } from "react";
import SearchBar from "../SearchBar";
import { fetchData } from "../../helpers/fetchData";
import VideoList from "../VideoList";
import VideoContext from "../../helpers/VideoContent";

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
        // console.log(response)
      } catch (error) {
        console.error("Error acquring data: ", error);
      }
    };
    handleData("coding");
  }, []);

  return (
    <div>
      <h1>Welcome to YouTube!</h1>
      <SearchBar handleSubmit={handleSubmit} setSearchQuery={setSearchQuery} />

      <VideoList videos={videos} />
    </div>
  );
}

export default Home;
