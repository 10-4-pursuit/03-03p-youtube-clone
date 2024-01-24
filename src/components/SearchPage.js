import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import {SearchBar, VideoDetails, VideoList} from "./index"
import youtube from "../api/youtube";
const apiKey = process.env.REACT_APP_API_KEY;

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const initialSearchTerm = new URLSearchParams(window.location.search).get(
      "q"
    );
    if (initialSearchTerm) {
      handleSubmit(initialSearchTerm);
    }
  }, []);

  const handleSubmit = async (term) => {
    setSearchTerm(term);
    try {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: apiKey,
          q: term,
        },
      });
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <SearchBar searchTerm={searchTerm} onFormSubmit={handleSubmit} />
      </Grid>

      <Grid item xs={8}>
        <VideoDetails video={selectedVideo} />
      </Grid>

      <Grid item xs={4}>
        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
      </Grid>
    </Grid>
  );
}

export default SearchPage;
