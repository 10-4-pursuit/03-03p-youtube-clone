import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Components/Home/index';
import VideoList from './Components/VideoList/index';
import VideoRoute from './Components/VideoRoute/index';

function App() {
  return (
    <header className="App-header">
      <Router>
        <nav className='main-nav'>
          <Link to='/'>YouTube</Link>
          <Link to='/search'></Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search' element={<VideoList />} />
          <Route path='/video/:vidId' element={<VideoRoute />} />
        </Routes>
      </Router>
    </header>
  );
}

export default App;
