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

// Fetches music videos from YouTube.
const fetchMusicVideos = async () => {
    try {
        const musicCategoryId = '10'; // Replace with the actual category ID for music in your region
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'US',
                videoCategoryId: musicCategoryId,
                maxResults: 10,
                key: process.env.REACT_APP_API_KEY,
            }
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching music videos:', error);
    }
};

// Fetches gaming videos from YouTube.
const fetchGamingVideos = async () => {
    try {
        const gamingCategoryId = '20'; // Replace with the actual category ID for gaming in your region if different
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'US', // You can change this to the region you're interested in
                videoCategoryId: gamingCategoryId,
                maxResults: 10, // Adjust the number of results as needed
                key: process.env.REACT_APP_API_KEY,
            }
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching gaming videos:', error);
    }
};


export { 
    dataFetching, 
    fetchVideoById, 
    fetchTrendingVideos, 
    fetchMusicVideos,
    fetchGamingVideos
};