import axios from "axios";

const BaseUrl = "https://youtube.googleapis.com/youtube/v3/search";
const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;


const fetchVideos = async (searchTerm) => {
    const params = {
        part: "snippet",
        type: "video",
        maxResults: 10,
        q: searchTerm,
        key: apiKey
    };
    
    try{
        const response = await axios.get(BaseUrl, { params });
        return response.data.items;
    }catch(error){
        console.log('Error fetching videos:', error);
        throw error;
    }
}

export default fetchVideos