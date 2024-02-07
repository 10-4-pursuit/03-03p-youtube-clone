import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import { Grid, Box, Typography } from "@mui/material";
import {SearchBar, VideoDetails, VideoList} from "./index"
import youtube from "../api/youtube";

const apiKey = process.env.REACT_APP_API_KEY;

function SearchPage() {
  // const [searchTerm, setSearchTerm] = useState("");
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  // useEffect(() => {
  //   const initialSearchTerm = new URLSearchParams(window.location.search).get(
  //     "q"
  //   );
  //   if (initialSearchTerm) {
  //     handleSubmit(initialSearchTerm);
  //   }
  // }, []);

  // const handleSubmit = async (term) => {
  //   setSearchTerm(term);
  //   try {
  //     const response = await youtube.get("search", {
  //       params: {
  //         part: "snippet",
  //         maxResults: 5,
  //         key: apiKey,
  //         q: term,
  //       },
  //     });
  //     setVideos(response.data.items);
  //     setSelectedVideo(response.data.items[0]);
  //   } catch (error) {
  //     console.error("Error fetching videos:", error);
  //   }
  // };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    // <Grid container spacing={10}>
    //   <Grid item xs={12}>
    //     <SearchBar searchTerm={searchTerm} onFormSubmit={handleSubmit} />
    //   </Grid>

    //   <Grid item xs={8}>
    //     <VideoDetails video={selectedVideo} />
    //   </Grid>

    //   <Grid item xs={4}>
    //     <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    //   </Grid>
    // </Grid>

  
   
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
           <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
            Search Results for
             <span style={{ color: "#FC1503" }}>{searchTerm}</span>Videos
           </Typography>
   
           {<VideoList videos={videos}/>}

         </Box>
         
         
   
   
       
          
        
    
  );
}

export default SearchPage;
