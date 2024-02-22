import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Paper, Typography, Box, Stack, Grid } from "@mui/material";

import { SearchBar, VideoList } from "./index";
import youtube from "../api/youtube";

const apiKey = process.env.REACT_APP_API_KEY;

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  const handleVideoClick = ({videoId}) => {
    navigate(`/video/${videoId}`); 
  };

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await youtube.get("videos", {
          params: {
            part: "snippet",
            maxResults: 12,
            key: apiKey,
            id: `${id}`,
          },
        });
        setVideoDetail(response.data.items[0]);

        // Get keywords from the video
        const keywords = getKeywordsFromVideo(response.data.items[0]);
        fetchRelatedVideos(keywords);
      };

      const fetchRelatedVideos = async (keywords) => {
        const results = await youtube.get("search", {
          params: {
            part: "snippet",
            maxResults: 4,
            key: apiKey,
            q: keywords.join(" "),
            type: "video",
          },
        });
        setVideos(results.data.items.filter((vid) => vid.id.videoId !== id));
      };
      getData();
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }, [id]);

  // Function to extract keywords from the video data
  const getKeywordsFromVideo = (videoData) => {
    const keywords = [];

    // Extract keywords from title, description, tags, etc.
    keywords.push(...videoData.snippet.title.split(/\W+/)); 
   
    return keywords;
  };

  if (!videoDetail) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}spacing ={20}>
          <Box flex={1}>
            <Box sx={{ width: "150%", position: "sticky", top: "86px" }} >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />

              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {videoDetail.snippet.title}
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoDetail.snippet.channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>

                <Stack direction="row" gap="20px" alignItems="left">
                  <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
                    {videoDetail.snippet.description}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 1 }}>
            
           <VideoList videos={videos} onVideoClick={handleVideoClick} />
          </Box>
         
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default VideoDetails;
