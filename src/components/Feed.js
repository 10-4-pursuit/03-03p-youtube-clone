import { Sidebar } from "./index";
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import youtube from "../api/youtube";
const apiKey = process.env.REACT_APP_API_KEY;

const Feed = () => { 
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);


    useEffect(() => {
        const fetchPopularVideos = async () => {
              const response = await youtube.get("videos", {
                params: {
                  part: "snippet",
                  chart: "mostPopular",
                  maxResults: 5, // Adjust as needed
                  key: apiKey,
                }
              });
              setVideos(response.data.items);  
          };
          fetchPopularVideos();
        }, [selectedCategory]);
      

return (

    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      
      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
        Copyright © 2024 Will Do Industries
      </Typography>
    </Box>
    </Stack>

)

}

export default Feed;