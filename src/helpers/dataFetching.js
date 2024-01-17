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

export { dataFetching, fetchTrendingVideos };