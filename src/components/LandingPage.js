import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import {SearchBar, VideoDetails, VideoList} from "./index"
import youtube from "../api/youtube";
const apiKey = process.env.REACT_APP_API_KEY;

function LandingPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch popular or predefined videos here
    const fetchPopularVideos = async () => {
      try {
        const response = await youtube.get("videos", {
          params: {
            part: "snippet",
            chart: "mostPopular",
            maxResults: 5, // Adjust as needed
            key: apiKey,
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchPopularVideos();
  }, []);

  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <h1>Popular Videos</h1>
      </Grid>
      <Grid item xs={12}>
        <VideoList videos={videos} />
      </Grid>
    </Grid>
  );
}

export default LandingPage;