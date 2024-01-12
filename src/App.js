import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Components/Home/index.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <Link to='/'>Home</Link>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} exact />
          </Routes>

        </Router>
      </header>
    </div>
  );
}

export default App;
