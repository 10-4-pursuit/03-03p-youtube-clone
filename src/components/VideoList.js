import React from "react";

import { Grid } from "@mui/material";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoClick }) => { 
    const handleVideoClick = (videoId) => {
        // Trigger click handler passed from parent component
        onVideoClick(videoId);
      };
    
      const listOfVideos = videos.map((video, id) => (
        <VideoItem
          key={id}
          video={video}
          onVideoClick={() => handleVideoClick(video.id)}
        />
      ));
    
      return (
        <Grid container spacing={10}>
          {listOfVideos}
        </Grid>
      );
    };
    

export default VideoList;