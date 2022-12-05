import React from 'react'
import About from './Components/About'
import TopNavBar from './Components/TopNavbar'
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<TopNavbar />} />
          <Route path='About' element={<About />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
