
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import React from "react";
import { Grid } from "@mui/material";
import youtube from "./api/youtube";
import {SearchBar, VideoDetails, VideoList, LandingPage,SearchPage } from "./components/index"
const apiKey = process.env.REACT_APP_API_KEY;



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
        key: apiKey,
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
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
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

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router><App /></Router>);

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );
export default App;
