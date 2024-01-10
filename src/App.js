import React, { useState } from 'react';
import fetchVideos  from './youtubeService';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import Header from './components/Header';


function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (searchTerm) => {
    setIsLoading(true);
    setError('');
    try {
      const videoItems = await fetchVideos(searchTerm);
      setVideos(videoItems);
      setSelectedVideo(null);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError('Failed to fetch videos. Please try again.'); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="content-wrapper">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <div className="error-message">{error}</div>} 
      {isLoading ? <div>Loading...</div> : 
        <>
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          <VideoPlayer video={selectedVideo} />
        </>
      }
      
    </div>
  );
}

export default App;
