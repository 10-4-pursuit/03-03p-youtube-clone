import axios from "axios";

const dataFetching = async (searchTerm) => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
            part: 'snippet',
            maxResults: 10,
            key: process.env.REACT_APP_API_KEY,
            q: searchTerm
        }
    })

    return (
        response.data
    )
};

export default dataFetching;