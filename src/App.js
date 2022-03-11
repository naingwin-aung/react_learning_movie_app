import React from "react";
import "./App.css";
import Home from './Home'
import Movie from './components/Movie'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/movie/:id" element={<Movie/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
