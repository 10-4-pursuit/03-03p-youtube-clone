import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material"
import youtube from "../api/youtube";
const apiKey = process.env.REACT_APP_API_KEY;

const SearchBar = () =>  {
  const [searchTerm, setSearchTerm] = useState("")
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const initialSearchTerm = new URLSearchParams(window.location.search).get(
  //     "q"
  //   );
  //   if (initialSearchTerm) {
  //     handleSubmit(initialSearchTerm);
  //   }
  // }, []);

  // const handleSubmit = async (term) => {
  //   setSearchTerm(term);
  //   const { onFormSubmit } = this.props;
  //       onFormSubmit(searchTerm)
  //       // event.preventDefault();
  //   try {
  //     const response = await youtube.get("search", {
  //       params: {
  //         part: "snippet",
  //         maxResults: 5,
  //         key: apiKey,
  //         q: term,
  //       },
  //     });
  //     setVideos(response.data.items);
  //     setSelectedVideo(response.data.items[0]);
  //   } catch (error) {
  //     console.error("Error fetching videos:", error);
  //   }
  // };



// const handleChange = (event) => {setSearchTerm(event.target.value)}

// const handleSubmit = (event) => {
//     const { searchTerm } = this.state;
//     const { onFormSubmit } = this.props;

//     onFormSubmit(searchTerm)

//     event.preventDefault();

// }

const onhandleSubmit = (e) => {
  e.preventDefault();

  if (searchTerm) {
    navigate(`/search/${searchTerm}`);

    setSearchTerm('');
  }
};

        return (
            <Paper 
            component='form'
            onSubmit={onhandleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
              }}
            >
                <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        // onFormSubmit={handleSubmit}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
                <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <Search />
      </IconButton>
                </Paper>
        )
    }
 
 export default SearchBar;