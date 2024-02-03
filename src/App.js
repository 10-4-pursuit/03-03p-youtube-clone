import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import VideoList from './Components/VideoList/VideoList';
import VideoRoute from './Components/VideoRoute/VideoRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/search' element={<VideoList />} />
            <Route path='/video/:vidId' element={<VideoRoute />} /> 
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
