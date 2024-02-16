import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import VideoProvider from './Helpers/Provider';
import VideoRoute from './Components/VideoRoute/VideoRoute';
import SearchRoute from './Components/SearchRoute/SearchRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search' element={<SearchRoute />} />
              <Route path='/video/:vidId' element={<VideoRoute />} />
            </Routes>
          </Router>
        </VideoProvider>
      </header>
    </div>
  );
}

export default App;
