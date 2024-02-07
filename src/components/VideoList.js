import React from "react";
import { Grid, Stack, Box } from "@mui/material";
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

      const handleVideoClick = ({videoId}) => {
       
        // onVideoClick(videoId);
        navigate(`/search?q=${videoId}`)
      };
     
      return (

  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>   
       {listOfVideos}
      </Grid>

      );
    };
    

export default VideoList;