// Import Dependencies and Components
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import VideoRoute from './components/VideoRoute';
import SearchRoute from './components/SearchRoute';
import SearchBar from './components/SearchBar';

function App() {

  // Return JSX for Rendering
  return (
    <div className="App">
      <header className="App-header">
        {/* Use BrowserRouter (aliased as Router) to enable routing in the app. */}
        <Router>
          {/* Navigation Setup with Link */}
          <nav>
            <div className='header-spacer'>
            <Link to='/' className='youtube-home-link'>YouTube</Link>
            </div>
            <SearchBar />
            <div className='header-spacer'></div>
          </nav>

          {/* 
          Define Routes Using Routes and Route:
          - Routes is used to define all possible routes in the application.
          - Route defines individual routes and their corresponding components.
          */}
          <Routes>
            {/* Define Home Route */}
            <Route path='/' element={<Home />} />
            {/* Define Video Route */}
            <Route path='/video/:videoId' element={<VideoRoute />} />
            <Route path='/search' element={<SearchRoute />} />
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
