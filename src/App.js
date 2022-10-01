import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Intro from './Intro';
import './App.css'
import About from './About';
import Interests from './Interests';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Intro />
        <About />
        <Interests/>
      </div>
    </Router>
  );
}

export default App;
