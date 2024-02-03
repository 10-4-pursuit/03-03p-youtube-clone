import axios from "axios";

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
      
      
}

export {fetchData, getVideoById};