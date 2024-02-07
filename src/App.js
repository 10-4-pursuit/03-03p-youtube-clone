
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import React from "react";
import { Grid, Box } from "@mui/material";
import youtube from "./api/youtube";
import { LandingPage,SearchPage, NavBar } from "./components/index"
const apiKey = process.env.REACT_APP_API_KEY;


function App (){
   
    return (
      <BrowserRouter>
      <Box  sx={{ backgroundColor: '#000' }}>
      <NavBar />
         <Routes>
           <Route path="/" element={<LandingPage />} />
           <Route path="/search/:searchTerm" element={<SearchPage />} />  
        </Routes>
        </Box>
        </BrowserRouter>
  
    ) 
}

export default App;
