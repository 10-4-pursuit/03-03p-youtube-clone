import React, { useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom'
import { Grid, Box, Typography } from "@mui/material";
import {SearchBar, VideoDetails, VideoList} from "./index"
import youtube from "../api/youtube";

const apiKey = process.env.REACT_APP_API_KEY;

function SearchPage() {
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getData =  async () => {
          const response = await youtube.get("search", {
            params: {
              part: "snippet",
              maxResults: 12,
              key: apiKey,
              q:`${searchTerm}`
            },
          });
          setVideos(response.data.items);
        }
        getData()
        } catch (error) {
          console.error("Error fetching videos:", error);
        }   
  }, [searchTerm])


  const handleVideoClick = ({videoId}) => {
    navigate(`/video/${videoId}`); 
  };

  return (

    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
           <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
            Search Results for
             <span style={{ color: "#FC1503" }}>{searchTerm}</span>Videos
           </Typography>
   
         <VideoList videos={videos} onVideoClick={handleVideoClick} /> 
         

         </Box>
    
  );
}

export default SearchPage;
