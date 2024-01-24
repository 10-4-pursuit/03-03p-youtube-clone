import React from "react";
import { Grid } from "@mui/material";
import VideoItem from "./VideoItem";
import { useNavigate } from 'react-router-dom';

const VideoList = ({ videos, onVideoClick }) => { 
  const navigate = useNavigate();
    
      const listOfVideos = videos.map((video, id) => (
        <VideoItem
          key={id}
          video={video}
          onVideoClick={() => handleVideoClick(video.id)}
        />
      ));
      console.log(videos)
      const handleVideoClick = ({videoId}) => {
       console.log(videoId)
        // onVideoClick(videoId);
        navigate(`/search?q=${videoId}`)
      };
    
      return (
        <Grid container spacing={10}>
          {listOfVideos}
        </Grid>
      );
    };
    

export default VideoList;