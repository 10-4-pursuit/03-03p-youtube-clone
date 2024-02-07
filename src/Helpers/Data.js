import axios from "axios";

// Function to fetch search results based on a query
const fetchData = async (searchQuery) => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
            part: 'snippet',
            maxResults: 10,
            key: process.env.REACT_APP_API_KEY,
            q: searchQuery
        }
    })

    return (
        response.data
    )
};

// Function to fetch video details by ID
const getVideoById = async (id) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            part: 'snippet,contentDetails,statistics',
            id: id, 
            key: process.env.REACT_APP_API_KEY
          }
        });
        return response.data.items[0];
      
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
      
      
};

// Function to fetch trending videos
const fetchTrendingVideos = async () => {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'US',
                maxResults: 10,
                key: process.env.REACT_APP_API_KEY,
            }
        });

        return (
            console.log(response.data.items),
            response.data.items
        )

    } catch (error) {
        console.error('Error fetching trending videos:', error);
    }
};

export {fetchData, getVideoById, fetchTrendingVideos};