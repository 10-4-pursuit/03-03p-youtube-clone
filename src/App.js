import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Components/Home/index';
import VideoList from './Components/VideoList/index';
import VideoRoute from './Components/VideoRoute/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/search'></Link>
          </nav>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/search' element={<VideoList />} />
            <Route path='/video/:vidId' element={<VideoRoute />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
