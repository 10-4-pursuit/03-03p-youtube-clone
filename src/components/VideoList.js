import React from "react";
import { Grid, Stack, Box } from "@mui/material";
import VideoItem from "./VideoItem";
import { useNavigate } from 'react-router-dom';
import {VideoCard, ChannelCard} from './index'

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
        // <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>   
{videos.map((_, index) => (
 <Grid item xs={2} sm={4} md={4} key={index}>
        
         {listOfVideos} 
</Grid>
      ))}
      </Grid>
        // </Stack>
      
      );
    };
    

export default VideoList;