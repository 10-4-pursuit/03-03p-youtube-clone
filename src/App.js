import React from "react";

import { Grid } from "@mui/material";
import youtube from "./api/youtube";

// import VideoDetails from "./components/VideoDetails"
// import SearchBar from "./components/SearchBar"

import { SearchBar, VideoDetails, VideoList } from "./components";

class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null,
    }

    componentDidMount = () => {
        this.handleSubmit("surfboards");
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video})
    }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDm-j4hclqYap9Vek7Q4NeUhma7COrvQLw",
        q: searchTerm,
      },
    });
this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]});
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetails video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
