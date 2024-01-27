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
        <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      
{videos.map((item, idx) => (
 <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
          {/* {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />} */}
          {listOfVideos}
       



</Grid>
      ))}

        </Stack>
      
      );
    };
    

export default VideoList;