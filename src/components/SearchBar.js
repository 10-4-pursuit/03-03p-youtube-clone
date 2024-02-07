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
        onChange={(e) => setSearchTerm(e.target.value)}
      />
                <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <Search />
      </IconButton>
                </Paper>
        )
    }
 
 export default SearchBar;