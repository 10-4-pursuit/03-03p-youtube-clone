
import React from "react";
import {Grid, Paper, Typography, Card, CardContent, CardMedia} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const VideoItem = ({video, onVideoClick}) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
       {/* <Grid item xs={12}> */}
       <CardMedia image={video.snippet?.thumbnails?.high?.url} alt={video.snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
       <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {video.snippet?.title}
            </Typography>
        <Typography variant="subtitle2" color="gray">
          {video.snippet?.channelTitle }
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
</CardContent>
        </Card >  
        
        )
}

export default VideoItem;