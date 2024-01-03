
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import React from "react";
import { Grid } from "@mui/material";
import youtube from "./api/youtube";
import { LandingPage,SearchPage } from "./components/index"
const apiKey = process.env.REACT_APP_API_KEY;


function App (){
   
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <BrowserRouter>
        <Routes>
           <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} /> 
        </Routes>
        </BrowserRouter>
      
          </Grid>
        </Grid>
  
    ) 
}

export default App;
