import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";
import VideoRoute from './components/VideoRoute';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <Link to='/'>YouTube</Link>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/video/:videoId' element={<VideoRoute />} />
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
