import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./components/Home";

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
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;
