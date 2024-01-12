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
        console.log(response)
        // response.data
    )
};

export default fetchData;