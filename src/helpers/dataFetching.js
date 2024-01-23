// Import Axios
import axios from "axios";

const dataFetching = async (searchTerm) => {
    // Creating an HTTP GET Request to the YouTube Search API with Axios
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        // Specify Query Parameters
        params: {
            part: 'snippet',
            maxResults: 20,
            key: process.env.REACT_APP_API_KEY,
            q: searchTerm
        }
    })

    // Return the Response Data
    return (
        response.data
    )
};

const fetchVideoById = async (videoId) => {
    try {
        // Making an HTTP GET request to the YouTube Videos API
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet,contentDetails,statistics', // Specify the parts you need
                id: videoId, // The ID of the video you want to fetch
                key: process.env.REACT_APP_API_KEY, // Your YouTube API key
            }
        });

        // Handling the response
        if (response.data.items.length === 0) {
            throw new Error('No video found with the provided ID');
        }

        return response.data.items[0]; // Returns the video object
    } catch (error) {
        console.error('Error fetching video by ID:', error);
        throw error; // Re-throw the error for further handling
    }
};

// Fetches the trending videos from YouTube.
const fetchTrendingVideos = async () => {
    try {
        // Creating an HTTP GET Request
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'US',
                maxResults: 10,
                key: process.env.REACT_APP_API_KEY,
            }
        });
        // Handling the Response
        return (
            response.data.items
        )

        // Error Handling
    } catch (error) {
        console.error('Error fetching trending videos:', error);
    }
};

export { dataFetching, fetchVideoById, fetchTrendingVideos };