import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Paper, Typography, Box, Stack } from '@mui/material';

import {SearchBar, VideoList} from "./index"
import youtube from "../api/youtube";

const apiKey = process.env.REACT_APP_API_KEY;

const VideoDetails = ({video}) => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        try {
          const getData =  async () => {
              const response = await youtube.get("videos", {
                params: {
                  part: "snippet",
                  maxResults: 12,
                  key: apiKey,
                  id:`${id}`
                },
              });
              setVideoDetail(response.data.items[0]);
            }
            getData()
            } catch (error) {
              console.error("Error fetching videos:", error);
            }   
      }, [id])

    if (!videoDetail) return <div>Loading...</div>

  
    return (
       <React.Fragment>
         <Box minHeight="95vh">
         <Stack direction={{ xs: "column", md: "row" }}>
         <Box flex={1}>
         <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
        {videoDetail.snippet.title}
            </Typography>
        <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
        <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
        {videoDetail.snippet.channelTitle}
        <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
             </Typography>
             <Stack direction="row" gap="20px" alignItems="center">
        <Typography variant="body1" sx={{ opacity: 0.7 }}>{videoDetail.snippet.description}
        </Typography>
        </Stack>
        </Stack>
        </Box>
        </Box>
        {/* <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
            <VideoList videos={videos}/>
        </Box> */}
      
        </Stack>
        </Box>
       </React.Fragment>
    )
}

export default VideoDetails;